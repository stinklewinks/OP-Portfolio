import React from 'react'
import Card from './Card'
import SkillCard from './SkillCard'

function Skills() {
    return (
        <section className="h:40 bg-gray-100 w:65 m:auto flex col between" id="skills">
            <h2 className="text:xlg text:center mt:5">My Skill Set</h2>
            <aside className="ml:rel:5 flex evenly fw-wrap">
                <SkillCard
                    heading="React"
                    content="A popular, widely used framework and the basis for the Typescript template."
                    id="hidden-div"
                />
                <SkillCard
                    heading="Typescript"
                    content="A popular, widely used framework and the basis for the Typescript template."
                    id="another-div"
                />
                <SkillCard
                    heading="Node"
                    content="A popular, widely used framework and the basis for the Typescript template."
                    id="node-div"
                />
                <SkillCard
                    heading="Bootstrap"
                    content="A popular, widely used framework and the basis for the Typescript template."
                    id="boot-div"
                />
                <SkillCard
                    heading="Tailwind"
                    content="A popular, widely used framework and the basis for the Typescript template."
                    id="tail-div"
                />
            </aside>
            <a className="text:center justify:items [end]" href="#main-nav">Back to Top</a>
        </section>
    )
}

export default Skills