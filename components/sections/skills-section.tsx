import { AsciiArt } from "@/components/ascii-art"

export function SkillsSection() {
  return (
    <div className="space-y-4">
      <AsciiArt art="skills" />

      <div className="space-y-6">
        <div>
          <h3 className="text-primary font-bold mb-2">Programming Languages</h3>
          <div className="space-y-2">
            <SkillBar name="C" percentage={80} />
            <SkillBar name="C++" percentage={85} />
            <SkillBar name="Python" percentage={75} />
            <SkillBar name="SQL" percentage={75} />
            <SkillBar name="HTML" percentage={60} />
            <SkillBar name="CSS" percentage={60} />
            <SkillBar name="JavaScript" percentage={70} />
          </div>
        </div>

        <div>
          <h3 className="text-primary font-bold mb-2">Frameworks & Libraries</h3>
          <div className="space-y-2">
            <SkillBar name="Node.js" percentage={85} />
            <SkillBar name="React.js" percentage={80} />
            <SkillBar name="Express.js" percentage={75} />
            <SkillBar name="Tailwind CSS" percentage={65} />
            <SkillBar name="Vite" percentage={60} />
            <SkillBar name="MongoDB" percentage={60} />
            <SkillBar name="Mongoose ODM" percentage={50} />
          </div>
        </div>

        <div>
          <h3 className="text-primary font-bold mb-2">Coursework</h3>
          <div className="space-y-2">
            <SkillBar name="Data Structures and Algorithms" percentage={90} />
            <SkillBar name="OOPs" percentage={80} />
            <SkillBar name="DBMS" percentage={75} />
            <SkillBar name="Operating Systems" percentage={80} />
            <SkillBar name="Machine Learning" percentage={75} />
            <SkillBar name="Deep Learning" percentage={50} />
          </div>
        </div>

        <div>
          <h3 className="text-primary font-bold mb-2">IDEs & Tools</h3>
          <div className="space-y-2">
            <SkillBar name="VS Code" percentage={85} />
            <SkillBar name="Jupyter Notebook" percentage={85} />
            <SkillBar name="Google Collab" percentage={85} />
            <SkillBar name="Git & GitHub" percentage={60} />
            <SkillBar name="Postman" percentage={85} />
          </div>
        </div>
      </div>
    </div>
  )
}

function SkillBar({ name, percentage }: { name: string; percentage: number }) {
  return (
    <div>
      <div className="flex justify-between text-xs mb-1">
        <span>{name}</span>
        <span>{percentage}%</span>
      </div>
      <div className="h-2 bg-muted rounded-full overflow-hidden">
        <div
          className="h-full bg-primary rounded-full"
          style={{ width: `${percentage}%` }}
          role="progressbar"
          aria-valuenow={percentage}
          aria-valuemin={0}
          aria-valuemax={100}
          aria-label={`${name} skill level: ${percentage}%`}
        />
      </div>
    </div>
  )
}
