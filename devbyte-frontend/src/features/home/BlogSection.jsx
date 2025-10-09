import React from "react";
import Card from "@/components/ui/Card";
import { CircleChevronRight } from "lucide-react";
import Button from "@/components/ui/Button";

const BlogSection = ({ blogPosts }) => {
  return (
    <div className="py-[100px]">
      <div className="text-center max-w-[1200px] mx-auto px-4">
        <h1 className="text-[28px] font-semibold">From the Devbyte Blog</h1>
        <h1 className="pt-2 text-[18px]">
          Community updates, tutorials and industry insights
        </h1>
      </div>
      <div className="mt-7 grid gap-4 justify-center 2xl-grid-col-4 xl-grid-col-4 lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 px-[90px]">
        {blogPosts.map((blog, bIdx) => (
          <Card key={`blog-${bIdx}`} className="space-y-3 p-3 shadow-sm">
            <img src={blog.image} alt="" className="w-full" />
            <h1 className="bg-gradient-to-r w-fit from-[#e2e3e4] to-[#e0e0e0]  rounded-sm text-black py-[2px] px-2 text-[12px] font-semibold">
              UPDATE
            </h1>
            <h1 className="text-[20px] font-semibold">{blog.title}</h1>
            <h1>{blog.description}</h1>
            <a
              className="flex bg-clip-text text-transparent bg-gradient-to-r from-[#00AEEF] to-[#6A5DFF] text-[14px] w-full gap-2 justify-center items-center"
              href=""
            >
              Read More <CircleChevronRight size={15} color="#00AEEF" />
            </a>
          </Card>
        ))}
      </div>
      <div className="flex justify-center w-full px-4 mt-10 md:mt-12">
        <Button
          children="View All Blog Posts"
          className="text-white transition-colors duration-500 ease-in-out bg-blue-500 hover:bg-blue-700"
        />
      </div>
    </div>
  );
};

export default BlogSection;
