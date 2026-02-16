"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { fetchAPI, getStrapiMedia, formatDate } from "@/lib/strapi";
import { getPopularTags } from "@/services/tagService";
import Skeleton from "@/components/skeleton";

const Tags = () => {
    const [tags, setTags] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await getPopularTags(15);
                setTags(response?.data || []);
            } catch (error) {
                console.error("Error fetching tags:", error);
                setError(true);
            } finally {
                setLoading(false);
            }
        }
        fetchData();
    }, []);

    if (loading) {
       return (
        <div className="panel_inner mb-0">
            <div className="panel_header">
                <h4>
                    <strong>Tags </strong>
                </h4>
            </div>
            <div className="panel_body">
                <div className="tags-inner d-flex flex-wrap gap-2">
                    {[1,2,3,4,5,6].map(i => (
                       <Skeleton key={i} style={{ width: `${Math.floor(Math.random() * 40) + 50}px`, height: '25px', borderRadius: '4px' }} />
                    ))}
                </div>
            </div>
        </div>
       );
    }

    if (error || !tags.length) return null;

    return (
        <div className="panel_inner mb-0">
            <div className="panel_header">
                <h4>
                    <strong>Tags </strong>
                </h4>
            </div>
            <div className="panel_body">
                <div className="tags-inner d-flex flex-wrap gap-2">
                    {tags.map((tag) => {
                        const data = tag.attributes || tag;
                        return (
                        <Link
                            key={tag.id}
                            href={`/tag/${data.slug}`}
                            className="ui tag text-uppercase fw-semibold border"
                        >
                            {data.name}
                        </Link>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default Tags;