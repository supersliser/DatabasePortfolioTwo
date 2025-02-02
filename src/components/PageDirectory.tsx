import { useState } from "react";

export default function pageDirectory({ projects, fullSize, hasLogo }: { projects: any, fullSize: boolean, hasLogo: boolean }) {

  const [OrderBy, setOrderBy] = useState("Title");
  const [Order, setOrder] = useState("asc");
  const [showOrderBy, setShowOrderBy] = useState(false);

  function setOrderByUtility(type: string) {
    setShowOrderBy(false);
    setOrderBy(type);
  }

  switch (OrderBy) {
    case "Title":
      projects = projects.sort((a: any, b: any) => {
        if (Order === "asc") {
          if (a.frontmatter.title < b.frontmatter.title) {
            return -1;
          }
          if (a.frontmatter.title > b.frontmatter.title) {
            return 1;
          }
          return 0;
        }
        else {
          if (a.frontmatter.title > b.frontmatter.title) {
            return -1;
          }
          if (a.frontmatter.title < b.frontmatter.title) {
            return 1;
          }
          return 0;
        }
      });
      break;
    case "Date":
      projects = projects.sort((a: any, b: any) => {
        if (Order === "asc") {
          if (a.frontmatter.created < b.frontmatter.created) {
            return -1;
          }
          if (a.frontmatter.created > b.frontmatter.created) {
            return 1;
          }
          return 0;
        }
        else {
          if (a.frontmatter.created > b.frontmatter.created) {
            return -1;
          }
          if (a.frontmatter.created < b.frontmatter.created) {
            return 1;
          }
          return 0;
        }
      });
      break;
  }

  return (
    <div style={{ width: "100%", position: "relative" }}>
      {!showOrderBy ? null : <ul style={{ zIndex: "10000", position: "relative", top: "50px", left: "10%", width: "80%", height: "100%", overflowY: "auto", backgroundColor: "#0F0F26", color: "#ffffff", borderColor: "#ffffff", borderWidth: "1px", borderStyle: "solid", display: "flex", justifyContent: "start", alignItems: "center", flexDirection: "column" }}>
        <button key={"Title"} onClick={() => setOrderByUtility("Title")} style={{ backgroundColor: "rgba(255, 255, 255, 0.1)", padding: "10px", width: "80%", color: "#ffffff", fontFamily: 'Expletus Sans Variable', marginTop: "20px", marginBottom: "20px", marginLeft: "10%", marginRight: "10%" }}>Title</button>
        <button key={"Date"} onClick={() => setOrderByUtility("Date")} style={{ backgroundColor: "rgba(255, 255, 255, 0.1)", padding: "10px", width: "80%", color: "#ffffff", fontFamily: 'Expletus Sans Variable', marginTop: "20px", marginBottom: "20px", marginLeft: "10%", marginRight: "10%" }}>Date</button>
      </ul>}
      <ul
        className="hideable"
        style={fullSize ? { margin: "0", padding: "0", display: "flex", justifyContent: "start", alignItems: "center", flexDirection: "column", width: "100%", position: "relative" } : { overflowY: "auto", height: "95.9vh", top: "-1.6%", left: "0", padding: "20px", backgroundColor: "#0F0F26", color: "#ffffff", borderColor: "#ffffff", borderWidth: "1px", borderStyle: "solid", display: "flex", justifyContent: "start", alignItems: "center", flexDirection: "column", position: "fixed", }}
      >
        <div style={{ position: "absolute", top: "0", marginTop: "11%", left: "40%", width: "20%", height: "92%", backgroundColor: "#353459", zIndex: "0", borderRadius: "50px" }}></div>
        <div style={{ display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", width: "100%", gap: "0", zIndex: "1" }}><button style={{ backgroundColor: "#353459", padding: "10px", borderTopLeftRadius: "10px", borderBottomLeftRadius: "10px", color: "#ffffff", fontFamily: 'Expletus Sans Variable' }} onClick={() => setShowOrderBy(!showOrderBy)}>Order By: {OrderBy}</button><button style={{ backgroundColor: "#353459", padding: "10px", borderTopRightRadius: "10px", borderBottomRightRadius: "10px", color: "#ffffff", fontFamily: 'Expletus Sans Variable' }} onClick={() => setOrder(Order === "asc" ? "desc" : "asc")}>{Order}</button></div>
        {
          projects.map(
            (project: any) =>
              !project.frontmatter.hidden && (
                <a
                  href={project.url}
                  style={{ width: "80%", textAlign: "center", color: "#ffffff", fontFamily: 'Expletus Sans Variable', display: "flex", flexDirection: "row", justifyContent: hasLogo ? "space-between" : "center", alignItems: "center", marginTop: "10px", backgroundColor: "#353459", padding: "10px", borderRadius: "10px", textOverflow: "ellipsis", whiteSpace: "nowrap", overflow: "hidden", zIndex: "1" }}
                >
                  {hasLogo && (
                    <img
                      src={"/Logos/" + project.frontmatter.logo}
                      alt={"logo for " + project.frontmatter.title}
                      style={{ width: "30px", height: "30px", marginRight: "10px", }}
                    />
                  )}
                  {project.frontmatter.title}
                </a>
              ),
          )
        }
      </ul>
    </div>
  );
}
