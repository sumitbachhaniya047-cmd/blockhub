import { BookOpen, Hammer, Layers, Award, Briefcase, Rocket } from "lucide-react";

const steps = [
  { icon: BookOpen, title: "Learn", description: "Follow a free course from a creator or provider you can trust." },
  { icon: Layers, title: "Practice", description: "Reinforce it with exercises on the practice platforms we link to." },
  { icon: Hammer, title: "Build", description: "Turn what you learned into a project worth showing off." },
  { icon: Award, title: "Certify", description: "Back it up with a certificate from an official provider." },
  { icon: Briefcase, title: "Intern", description: "Apply what you've built to real, verified internship roles." },
  { icon: Rocket, title: "Get job-ready", description: "Arrive at your first interview with proof, not just promises." }
];

export function JourneySection() {
  return (
    <section className="bg-ink-900 py-16 text-paper">
      <div className="container-content">
        <h2 className="max-w-md font-display text-2xl font-bold">The path from here to hired</h2>
        <p className="mt-2 max-w-lg text-sm text-paper/60">
          Every course, certificate and internship on Pathfolio slots into one of these six stages.
        </p>

        <div className="mt-10 grid grid-cols-2 gap-px overflow-hidden rounded-lg bg-white/10 sm:grid-cols-3 lg:grid-cols-6">
          {steps.map((step, i) => (
            <div key={step.title} className="flex flex-col gap-3 bg-ink-900 p-5">
              <div className="flex h-9 w-9 items-center justify-center rounded-md bg-amber-500 text-ink-900">
                <step.icon className="h-4.5 w-4.5" />
              </div>
              <p className="font-display text-sm font-semibold">{step.title}</p>
              <p className="text-xs leading-relaxed text-paper/55">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
