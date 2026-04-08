import styles from "./SkillsStyle.module.css";
import SkillItem from "../../common/SkillItem";
import cIcon from "../../assets/icons/c-original.svg";
import htmlIcon from "../../assets/icons/html5-original.svg";
import cssIcon from "../../assets/icons/css3-original.svg";
import javascriptIcon from "../../assets/icons/javascript-original.svg";
import typescriptIcon from "../../assets/icons/typescript-original.svg";
import reactIcon from "../../assets/icons/react-original.svg";
import tailwindIcon from "../../assets/icons/tailwindcss-original.svg";
import bootstrapIcon from "../../assets/icons/bootstrap-original.svg";
import jqueryIcon from "../../assets/icons/jquery-original.svg";
import githubIcon from "../../assets/icons/github-original.svg";
function Skills() {
  const skills = [
    { name: "C", icon: cIcon },
    { name: "HTML5", icon: htmlIcon },
    { name: "CSS3", icon: cssIcon },
    { name: "JavaScript", icon: javascriptIcon },
    { name: "TypeScript", icon: typescriptIcon },
    { name: "React", icon: reactIcon },
    { name: "Tailwind CSS", icon: tailwindIcon },
    { name: "Bootstrap", icon: bootstrapIcon },
    { name: "jQuery", icon: jqueryIcon },
    { name: "GitHub", icon: githubIcon },
  ];

  return (
    <section id="skills" className={styles.container}>
      <h1 className="sectionTitle">Skills</h1>
      <div className={styles.skillList}>
        {skills.map((skill) => (
          <div key={skill.name} className={styles.pill}>
            <img src={skill.icon} alt={skill.name} />
            <p>{skill.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
