import { useState } from "react";
// Supports weights 400-700
import "@fontsource-variable/expletus-sans";
// Supports weights 100-900
import "@fontsource-variable/exo-2";

export default function SearchBar({ projects, hasLogo }: { projects: any, hasLogo: boolean }) {
  const [searchValue, setSearchValue] = useState("");

  const [displayProjects, setDisplayProjects] = useState<any[]>([]);

  const [FilterType, setFilterType] = useState("Title");

  function onType(event: any, projects: any) {
    const searchValue = event.target.value.toLowerCase();
    setSearchValue(searchValue);
    if (searchValue === "") {
      setDisplayProjects([]);

    } else {
      projects = projects.filter((project: any) => {
        return !project.frontmatter.hidden;
      })

      const filteredProjects = projects.filter((project: any) => {
        if (FilterType === "Title") {
          return project.frontmatter.title.toLowerCase().includes(searchValue);
        } else if (FilterType === "Author") {
          return project.frontmatter.authors.some((author: any) => author.toLowerCase().includes(searchValue));
        } else if (FilterType === "Tags") {
          return project.frontmatter.tags.some((tag: any) => tag.toLowerCase().includes(searchValue));
        }
      });
      setDisplayProjects(filteredProjects);

    }
  }

  if (displayProjects.length > 0) {
    return (
      <div style={{ textAlign: "center", width: "50%", margin: "0 auto", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
        {" "}
        <input
          id="search"
          name="search"
          type="text"
          placeholder="Search Projects"
          style={{
            width: "100%",
            margin: "0 auto",
            display: "block",
            padding: "10px",
            border: "4px solid #353459",
            outline: "none",
            borderRadius: "4px",
            backgroundColor: "#211259",
            color: "#ffffff",

          }}
          value={searchValue}
          onChange={(event) => {
            onType(event, projects);
          }}
        />
        <button style={{ width: "50%", margin: "0 auto", display: "block", minHeight: "50px" }} onClick={() => setFilterType(FilterType === "Title" ? "Author" : FilterType === "Author" ? "Tags" : "Title")}>Search By: {FilterType}</button>
        <SearchBarResult projects={displayProjects} hasLogo={hasLogo} />
      </div>
    );
  }
  return (
    <div style={{ textAlign: "center", width: "50%", margin: "0 auto", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
      {" "}
      <input
        id="search"
        name="search"
        type="text"
        placeholder="Search Projects"
        style={{
          width: "100%",
          margin: "0 auto",
          display: "block",
          padding: "10px",
          border: "4px solid #353459",
          outline: "none",
          borderRadius: "4px",
          backgroundColor: "#211259",
          color: "#ffffff",
        }}
        onChange={(event) => {
          onType(event, projects);
        }}
        value={searchValue}
      />
      <button style={{ width: "50%", margin: "0 auto", display: "block", borderWidth: "0", backgroundColor: "#353459", color: "#ffffff", minHeight: "50px", borderBottomRightRadius: "20px", borderBottomLeftRadius: "20px" }} onClick={() => setFilterType(FilterType === "Title" ? "Author" : FilterType === "Author" ? "Tags" : "Title")}>Search By: {FilterType}</button>
    </div>
  );
}

export function SearchBarResult({ projects, hasLogo }: { projects: any, hasLogo: boolean }) {
  return (
    <div
      style={{
        width: "50%",
        margin: "0 auto",
        display: "block",
        padding: "10px",
        border: "4px solid #ccc",
        outline: "none",
        borderRadius: "4px",
        backgroundColor: "#000000",
      }}
    >
      {projects.map((project: any) => (
        <li style={{ display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", fontFamily: "Expletus Sans Variable", }}>
          {hasLogo && (
            <img
              src={"/Logos/" + project.frontmatter.logo}
              alt={"logo for " + project.frontmatter.title}
              style={{ width: "30px", height: "30px", marginRight: "10px" }}
            />
          )}
          <a href={project.url}>{project.frontmatter.title}</a>
        </li>
      ))}
    </div>
  );
}
