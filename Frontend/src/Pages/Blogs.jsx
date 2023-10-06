import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
import Card from "../component/Card";
import Divider from "@mui/material/Divider";
import { useState, useEffect } from "react";
import axios from "axios";
import { useHref } from "react-router-dom";

const Blogs = () => {
  const [blogData, setBlogData] = useState([]);

  // Function to fetch data from the /blogs endpoint
  const fetchBlogData = async () => {
    try {
      const response = await axios.get("http://localhost:5000/blogs");
      setBlogData(response.data);
    } catch (error) {
      console.error("Error fetching blog data:", error);
    }
  };

  useEffect(() => {
    fetchBlogData();
  }, []);

  async function fetchImages(tags) {
    const images = [];
  
    // Check if tags is an array
    // if (!Array.isArray(tags)) {
    //   // Convert tags to an array
    //   tags = Array.from(tags);
    // }
  
    // // Concatenate tag elements
    // const tagQuery = tags.map((tag) => tag.join("")).join(" ");
  
    // try {
    //   const response = await axios.get(
    //     `'`
    //   );
  
    //   if (response.data.results.length > 0) {
    //     const imageSrc = response.data.results[0].urls.regular;
    //     images.push(imageSrc);
    //   }
    // } catch (error) {
    //   console.error(`Error fetching image for tag ${tagQuery}:`, error);
    // }
    images.push("https://images.unsplash.com/photo-1492725764893-90b379c2b6e7?ixlib=rb-4.0.3&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max'")
    return images;
  }

  useEffect(() => {
    // Use useEffect to fetch and set images for each blog
    blogData.forEach(async (blog) => {
      const images = await fetchImages(blog.tags);
      blog.images = images; // Add images property to each blog
      setBlogData([...blogData]); // Update state to trigger re-render
    });
  }, [blogData]); // Trigger when blogData changes

  // Function to slice the content
  const sliceContent = (content, maxLength) => {
    if (content.length > maxLength) {
      return content.slice(0, maxLength) + '...'; // Slice content and add ellipsis
    }
    return content;
  };

  return (
    <div>
      <Navbar />
      <br />
      <h1 style={{ paddingLeft: "17rem" }}>Blogs</h1>
      <br />
      <Divider />
      <br />
      <div
        className="DisplayProd"
        style={{
          width: "70%",
          display: "flex",
          justifyContent: "center",
          flexDirection: "row",
          gap: "1.5rem",
          flexWrap: "wrap",
        }}
      >
        {blogData.map((blog) => (
          <Card
            key={blog._id}
            title={blog.title}
            author={blog.author}
            content={sliceContent(blog.content, 200)} // Slice the content to 200 characters
            tags={blog.tags}
            image={blog.images}// Pass the images to the Card component
          />
        ))}
      </div>
      <br />
      <br />
      <Footer />
    </div>
  );
};

export default Blogs;
