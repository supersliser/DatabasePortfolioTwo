import { useState } from "react";

export default function SearchBar({ projects }: { projects: any }) {
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
        <SearchBarResult projects={displayProjects} />
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

export function SearchBarResult({ projects }: { projects: any }) {
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
        <li style={{display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center"}}>
          <img
            src={"/Logos/" + project.frontmatter.logo}
            alt={"logo for " + project.frontmatter.title}
            style={{width: "30px", height: "30px", marginRight: "10px"}}
          />
          <a href={project.url}>{project.frontmatter.title}</a>
        </li>
      ))}
    </div>
  );
}
