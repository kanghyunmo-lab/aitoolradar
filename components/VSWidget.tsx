"use client";

import { useState, useRef, useEffect } from "react";
import { useRouter } from "next/navigation";

// Define the interface for the tools passed down from the server
export interface ToolItem {
    name: string;
    slug: string;
}

interface VSWidgetProps {
    // DB tools passed from server component
    availableTools: ToolItem[];
}

export default function VSWidget({ availableTools = [] }: VSWidgetProps) {
    const router = useRouter();

    // State for Input A
    const [toolA, setToolA] = useState("");
    const [slugA, setSlugA] = useState("");
    const [suggestionsA, setSuggestionsA] = useState<ToolItem[]>([]);
    const [showDropdownA, setShowDropdownA] = useState(false);

    // State for Input B
    const [toolB, setToolB] = useState("");
    const [slugB, setSlugB] = useState("");
    const [suggestionsB, setSuggestionsB] = useState<ToolItem[]>([]);
    const [showDropdownB, setShowDropdownB] = useState(false);

    // Click outside listener
    const wrapperRef = useRef<HTMLDivElement>(null);
    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (wrapperRef.current && !wrapperRef.current.contains(event.target as Node)) {
                setShowDropdownA(false);
                setShowDropdownB(false);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    // Handlers for Input A
    const handleInputAChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const val = e.target.value;
        setToolA(val);
        setSlugA(""); // Reset slug if they are typing manually

        if (val.length > 0) {
            const filtered = availableTools.filter(t =>
                t.name.toLowerCase().includes(val.toLowerCase())
            ).slice(0, 5); // Show top 5
            setSuggestionsA(filtered);
            setShowDropdownA(true);
        } else {
            setShowDropdownA(false);
        }
    };

    const selectToolA = (tool: ToolItem) => {
        setToolA(tool.name);
        setSlugA(tool.slug);
        setShowDropdownA(false);
    };

    // Handlers for Input B
    const handleInputBChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const val = e.target.value;
        setToolB(val);
        setSlugB("");

        if (val.length > 0) {
            const filtered = availableTools.filter(t =>
                t.name.toLowerCase().includes(val.toLowerCase())
            ).slice(0, 5);
            setSuggestionsB(filtered);
            setShowDropdownB(true);
        } else {
            setShowDropdownB(false);
        }
    };

    const selectToolB = (tool: ToolItem) => {
        setToolB(tool.name);
        setSlugB(tool.slug);
        setShowDropdownB(false);
    };

    const handleMatchup = (e: React.FormEvent) => {
        e.preventDefault();
        if (!toolA || !toolB) return;

        // Require exact DB matches; if slug state isn't set, try to find an exact match from the array.
        let finalSlugA = slugA;
        if (!finalSlugA) {
            const match = availableTools.find(t => t.name.toLowerCase() === toolA.toLowerCase());
            if (match) finalSlugA = match.slug;
            else {
                alert("Please select a valid tool from the dropdown for Tool A.");
                return;
            }
        }

        let finalSlugB = slugB;
        if (!finalSlugB) {
            const match = availableTools.find(t => t.name.toLowerCase() === toolB.toLowerCase());
            if (match) finalSlugB = match.slug;
            else {
                alert("Please select a valid tool from the dropdown for Tool B.");
                return;
            }
        }

        // Both slugs are guaranteed safe and exact DB matches now.
        router.push(`/compare/${finalSlugA}-vs-${finalSlugB}`);
    };

    return (
        <div ref={wrapperRef} className="mx-auto mt-12 w-full max-w-3xl rounded-3xl border border-gray-800 bg-gray-900/50 p-6 backdrop-blur-xl shadow-2xl sm:p-8">
            <div className="text-center">
                <h3 className="text-xl font-bold text-white sm:text-2xl">
                    AI Tool Matchup <span className="text-blue-500">(VS)</span>
                </h3>
                <p className="mt-2 text-sm text-gray-400">
                    Search over 1,500+ direct comparisons to find your perfect fit
                </p>
            </div>

            <form onSubmit={handleMatchup} className="mt-8 flex flex-col items-center justify-between gap-4 sm:flex-row sm:gap-6">

                {/* Tool A Autocomplete */}
                <div className="w-full flex-1">
                    <label htmlFor="toolA" className="sr-only">Tool A</label>
                    <div className="relative">
                        <input
                            type="text"
                            id="toolA"
                            value={toolA}
                            onChange={handleInputAChange}
                            onFocus={() => { if (suggestionsA.length > 0) setShowDropdownA(true); setShowDropdownB(false); }}
                            placeholder="e.g. ChatGPT"
                            autoComplete="off"
                            className="w-full rounded-2xl border border-gray-700 bg-gray-800/80 px-5 py-4 text-center text-lg font-medium text-white shadow-inner focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/50"
                            required
                        />
                        {showDropdownA && suggestionsA.length > 0 && (
                            <ul className="absolute left-0 right-0 top-full z-50 mt-1 max-h-60 overflow-y-auto rounded-xl border border-gray-700 bg-gray-800 py-1 shadow-lg">
                                {suggestionsA.map((t) => (
                                    <li
                                        key={t.slug}
                                        onClick={() => selectToolA(t)}
                                        className="cursor-pointer px-4 py-3 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white transition-colors"
                                    >
                                        {t.name}
                                    </li>
                                ))}
                            </ul>
                        )}
                    </div>
                </div>

                {/* VS Badge */}
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-blue-600 font-black italic text-white shadow-[0_0_15px_rgba(37,99,235,0.5)] z-10 -my-2 sm:my-0">
                    VS
                </div>

                {/* Tool B Autocomplete */}
                <div className="w-full flex-1">
                    <label htmlFor="toolB" className="sr-only">Tool B</label>
                    <div className="relative">
                        <input
                            type="text"
                            id="toolB"
                            value={toolB}
                            onChange={handleInputBChange}
                            onFocus={() => { if (suggestionsB.length > 0) setShowDropdownB(true); setShowDropdownA(false); }}
                            placeholder="e.g. Claude 3"
                            autoComplete="off"
                            className="w-full rounded-2xl border border-gray-700 bg-gray-800/80 px-5 py-4 text-center text-lg font-medium text-white shadow-inner focus:border-red-500 focus:outline-none focus:ring-2 focus:ring-red-500/50"
                            required
                        />
                        {showDropdownB && suggestionsB.length > 0 && (
                            <ul className="absolute left-0 right-0 top-full z-50 mt-1 max-h-60 overflow-y-auto rounded-xl border border-gray-700 bg-gray-800 py-1 shadow-lg">
                                {suggestionsB.map((t) => (
                                    <li
                                        key={t.slug}
                                        onClick={() => selectToolB(t)}
                                        className="cursor-pointer px-4 py-3 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white transition-colors"
                                    >
                                        {t.name}
                                    </li>
                                ))}
                            </ul>
                        )}
                    </div>
                </div>

            </form>

            <div className="mt-8 flex justify-center">
                <button
                    onClick={handleMatchup}
                    className="group relative inline-flex items-center justify-center overflow-hidden rounded-xl bg-gradient-to-br from-blue-600 to-purple-600 p-0.5 font-bold text-white shadow-[0_0_20px_rgba(37,99,235,0.3)] transition-all hover:scale-105 hover:shadow-[0_0_30px_rgba(37,99,235,0.5)] focus:outline-none focus:ring-4 focus:ring-blue-300"
                >
                    <span className="relative flex items-center justify-center gap-2 rounded-[10px] bg-gray-900 px-8 py-3 transition-all duration-300 ease-in group-hover:bg-opacity-0">
                        Compare Now
                        <svg className="h-5 w-5 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                    </span>
                </button>
            </div>
        </div>
    );
}
