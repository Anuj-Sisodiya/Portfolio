import { AsciiArt } from "@/components/ascii-art"

export function ProjectsSection() {
  return (
    <div className="space-y-4">
      <AsciiArt art="projects" />

      <div className="space-y-6">
        <div className="p-3 border border-primary/20 rounded bg-primary/5">
          <h3 className="text-primary font-bold">Voting App</h3>
          <pre className="text-xs my-2 text-muted-foreground">
            {`
  +-------------+     +----------------+     +----------------+
  | Node.js     |---->| Express.js     |---->| MongoDB        |
  | Backend     |     | API Endpoints  |     | Database       |
  +-------------+     +----------------+     +----------------+
        |                    |                      |
        |                    v                      |
        |             +--------------+              |
        +------------>| JWT          |<-------------+
                      | Authentication|
                      +--------------+
                             |
                             v
                      +---------------+
                      | Role-based    |
                      | Access Control|
                      +---------------+
`}
          </pre>
          <p className="text-sm mb-2">
            Built a secure voting system for 500+ users with Aadhar Card and JWT-based authentication, implementing
            role-based access control for admins and users.
          </p>
          <p className="text-xs text-muted-foreground mb-2">
            Technologies: Node.js, Express.js, MongoDB, Mongoose ODM, JSON Web Tokens (JWT), Postman
          </p>
        </div>

        <div className="p-3 border border-primary/20 rounded bg-primary/5">
          <h3 className="text-primary font-bold">TasteGPT | AI-powered Recipe Finder</h3>
          <pre className="text-xs my-2 text-muted-foreground">
            {`
  +-------------+     +----------------+     +----------------+
  | React.js    |---->| Spoonacular    |---->| Recipe         |
  | Frontend    |     | API            |     | Data           |
  +-------------+     +----------------+     +----------------+
        |                                            |
        v                                            v
  +-------------+                            +----------------+
  | Tailwind CSS|                            | Dietary &      |
  | UI Design   |                            | Calorie Filters|
  +-------------+                            +----------------+
`}
          </pre>
          <p className="text-sm mb-2">
            Developed a recipe search app with dietary and calorie-based filters using the Spoonacular API. Designed a
            responsive UI with Tailwind CSS and optimized performance with Vite.
          </p>
          <p className="text-xs text-muted-foreground mb-2">
            Technologies: React.js, Tailwind CSS, Vite, Spoonacular API
          </p>
        </div>

        <div className="p-3 border border-primary/20 rounded bg-primary/5">
          <h3 className="text-primary font-bold">Tomato Leaf Disease Detection</h3>
          <pre className="text-xs my-2 text-muted-foreground">
            {`
  +-------------+     +----------------+     +----------------+
  | Python      |---->| SqueezeNet    |---->| Disease        |
  | ML Framework|     | CNN Model     |     | Classification |
  +-------------+     +----------------+     +----------------+
        |                    |                      |
        |                    v                      |
        |             +--------------+              |
        +------------>| Plant Village|<-------------+
                      | Dataset      |
                      +--------------+
                             |
                             v
                      +---------------+
                      | Visualization |
                      | & Analysis    |
                      +---------------+
`}
          </pre>
          <p className="text-sm mb-2">
            Built a real-time tomato disease detection system using SqueezeNet CNN. Achieved 90%+ accuracy during model
            training using the Tomato Plant Village dataset.
          </p>
          <p className="text-xs text-muted-foreground mb-2">
            Technologies: Python, SqueezeNet, Plant Village dataset, DL frameworks, Matplotlib
          </p>
        </div>
      </div>
    </div>
  )
}
