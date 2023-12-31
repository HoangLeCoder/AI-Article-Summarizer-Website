import { useState, useEffect } from "react";
import { copy, linkIcon, loader, tick, submit } from "../assets";
import { useLazyGetSummaryQuery } from "../services/article";

export const Demo = () => {
    const [article, setArticle] = useState({
        url: "",
        summary: "",
    });

    const [getSummary, {error, isFetching}] = useLazyGetSummaryQuery();

    const handleSubmit = async (e) => {
        alert("Submitted");
    };
    return (
        <section className="mt-16 w-full max-w-xl">
            {/*Search  */}
            <div className="flex flex-col w-full gap-2">
                <form
                    className="relative flex justify-center items-center"
                    onSubmit={handleSubmit}
                >
                    <img
                        src={linkIcon}
                        alt="link_icon"
                        className="absolute left-0 my-2 ml-3 w-5"
                    />
                    <input
                        type="url"
                        placeholder="Enter a URL"
                        value={article.url}
                        onChange={(e) => setArticle({...article, url: e.target.value})}
                        required
                        className="url_input peer"
                    />
                    <button
                        type="submit"
                        className="submit_btn hover_btn peer-focus:border-gray-700 peer-focus:text-gray-700"
                    >
                        <img src={submit} alt="submit_icon" className="w-4" />
                    </button>
                </form>

                {/* Browse URL History */}
            </div>

            {/* Display results */}
        </section>
    );
};
