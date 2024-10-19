import { useState } from "react";
// Supports weights 400-700
import "@fontsource-variable/expletus-sans";
// Supports weights 100-900
import "@fontsource-variable/exo-2";

export default function SearchBar({ projects, hasLogo }: { projects: any, hasLogo: boolean }) {
  const [searchValue, setSearchValue] = useState("");

  const [displayProjects, setDisplayProjects] = useState<any[]>([]);

  function onType(event: any, projects: any) {
    const searchValue = event.target.value.toLowerCase();
    setSearchValue(searchValue);
    if (searchValue === "") {
            setDisplayProjects([]);

    } else {
      const filteredProjects = projects.filter((project: any) => {
        return project.frontmatter.title.toLowerCase().includes(searchValue);
      });
            setDisplayProjects(filteredProjects);

    }
  }

  if (displayProjects.length > 0) {
    return (
      <div style={{ textAlign: "center" }}>
        {" "}
        <input
          id="search"
          name="search"
          type="text"
          placeholder="Search Projects"
          style={{
            width: "50%",
            margin: "0 auto",
            display: "block",
            padding: "10px",
            border: "4px solid #ccc",
            outline: "none",
            borderRadius: "4px",
          }}
          value={searchValue}
          onChange={(event) => {
            onType(event, projects);
          }}
        />
        <SearchBarResult projects={displayProjects} hasLogo={hasLogo} />
      </div>
    );
  }
  return (
    <div style={{ textAlign: "center" }}>
      {" "}
      <input
        id="search"
        name="search"
        type="text"
        placeholder="Search Projects"
        style={{
          width: "50%",
          margin: "0 auto",
          display: "block",
          padding: "10px",
          border: "4px solid #ccc",
          outline: "none",
          borderRadius: "4px",
        }}
        onChange={(event) => {
          onType(event, projects);
        }}
        value={searchValue}
      />
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
        <li style={{display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", fontFamily: "Expletus Sans Variable",}}>
          {hasLogo && (
          <img
            src={"/Logos/" + project.frontmatter.logo}
            alt={"logo for " + project.frontmatter.title}
            style={{width: "30px", height: "30px", marginRight: "10px"}}
          />
          )}
          <a href={project.url}>{project.frontmatter.title}</a>
        </li>
      ))}
    </div>
  );
}
