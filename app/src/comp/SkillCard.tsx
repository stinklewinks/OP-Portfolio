import {useRef} from 'react'
import Card from './Card'

interface SkillProps {
    heading: string;
    content: string;
    id: string;
}

function SkillCard({ heading, content, id }: SkillProps) {
    const divRef = useRef<HTMLDivElement | null>(null);
    const clickFunction = () => {
        divRef.current?.classList.toggle('dis:none');
    }
    return (
        <div className="flex col gap:1">
            <Card
                    heading={heading}
                    content={content}
            />
            <button
                className="btn:flat w:100% h:35% ds:sm bg:black:200 poppins text:color::white-100 rounded:sm"
                title="View Projects"
                onClick={clickFunction}
            >
                View Projects
            </button>
            <div
                className="dis:none h:25% w:100% bg:creamsicle-700 text:color::white-100"
                id={id}
                ref={divRef}
            >
                Content
            </div>
        </div>
    )
}

export default SkillCard