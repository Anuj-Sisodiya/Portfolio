import { AsciiArt } from "@/components/ascii-art"

export function ExperienceSection() {
  return (
    <div className="space-y-4">
      <AsciiArt art="experience" />

      <div className="space-y-6">
        <div className="relative pl-5 border-l border-primary/30">
          <div className="absolute w-3 h-3 bg-primary rounded-full -left-[6.5px] top-1" />
          <div className="mb-1">
            <h3 className="text-primary font-bold">Software Development Intern</h3>
            <p className="text-xs text-muted-foreground">
              Noetic Logistiex Pvt. Ltd., Bangalore, India | Sep 2023 – Jan 2024
            </p>
          </div>
          <ul className="text-sm space-y-1 list-disc pl-4">
            <li>
              Achieved <strong>98%+ accuracy</strong> by training a YOLOv8 model on 10,000+ labeled product images for image classification.
            </li>
            <li>
              Engineered an <strong>image transformation pipeline</strong> that increased e-commerce listing compatibility, boosting acceptance rate by <strong>30%</strong>.
            </li>
            <li>
              Automated image scraping using Selenium, extracting 1,200+ images from 7+ platforms and reducing manual data collection by <strong>80%</strong>.
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
