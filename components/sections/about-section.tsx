import { AsciiArt } from "@/components/ascii-art"
import { AsciiPortraitComparison } from "@/components/ascii-portrait-comparison"

export function AboutSection() {
  return (
    <div className="space-y-4">
      <AsciiArt art="about" />

      <div className="flex flex-col md:flex-row gap-6">
        <div className="md:w-2/5">
          <AsciiPortraitComparison />
          <div className="text-center text-xs text-muted-foreground mt-2">
            Anuj Pratap Singh
            <br />
            <span className="text-primary/60">Software Developer</span>
          </div>
        </div>

        <div className="space-y-3 md:w-3/5">
          <p>
            Hello! I'm Anuj Pratap Singh, a software developer with experience in full-stack development and machine
            learning.
          </p>

          <p>
            With experience as a Software Development Intern at Noetic Logistiex, I focus on building efficient
            solutions using modern technologies and frameworks.
          </p>

          <div className="mt-2 p-3 border border-primary/20 rounded bg-primary/5">
            <h3 className="text-primary font-bold mb-2">Education:</h3>
            <div className="space-y-2 text-sm">
              <p>
                <span className="font-semibold">Bachelor in Engineering</span> - Electronics and Communication
              </p>
              <p>Ramaiah Institute of Technology, Bangalore</p>
              <p>CGPA: 8.03, Expected Year: 2025</p>
            </div>
          </div>

          <p>
            I'm passionate about creating innovative solutions and continuously improving my skills in software
            development and machine learning.
          </p>

          <div className="mt-2 p-3 border border-primary/20 rounded bg-primary/5">
            <h3 className="text-primary font-bold mb-2">Problem Solving Profile:</h3>
            <p className="text-sm">Solved 400+ problems across multiple platforms, continuously improving my skills.</p>
            <ul className="space-y-1 mt-2">
              <li>
                <span className="text-muted-foreground">Platforms:</span> GeeksForGeeks, Leetcode, CodingNinjas
              </li>
            </ul>
          </div>

          <div className="mt-2 p-3 border border-primary/20 rounded bg-primary/5">
            <h3 className="text-primary font-bold mb-2">Positions Of Responsibility:</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <span className="font-semibold">CodeRIT, MSRIT</span> (Jan 2023 - July 2023)
                <p className="text-xs mt-1">
                  Led the technical team of 10+ members in CodeRIT, organizing hackathon, conducting workshops,
                  mentoring juniors, and fostering innovation.
                </p>
              </li>
              <li>
                <span className="font-semibold">National Service Scheme, MSRIT</span> (Dec 2023)
                <p className="text-xs mt-1">
                  Hosted various events, including a Blood Donation Camp that saw 900+ donors. Organized workshops
                  focusing on skill development for students.
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
