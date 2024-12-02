import { videoSources } from "@/lib/videoSources";
import CurriculumArea from "../../components/CurriculumArea";

export default function EngineeringPage() {
    return (
        <CurriculumArea
            title="Engineering Education in Early Childhood"
            introduction="Engineering in early childhood fosters problem-solving skills, creativity, and an understanding of how things work. It involves hands-on activities that encourage children to explore, design, build, and test ideas, laying the foundation for critical thinking and innovation. Through play-based engineering challenges, children develop persistence, collaboration, and curiosity about the world around them."
            perspectives="In early childhood education, engineering is seen as a way to integrate STEM learning into everyday experiences. Constructivist theories emphasize the role of exploration and discovery in learning, while Vygotsky's sociocultural theory highlights the importance of collaboration and guided interaction in engineering tasks. The Engineering Design Process is adapted for young learners, emphasizing the stages of asking, imagining, planning, creating, and improving to nurture problem-solving and resilience."
            resources={[
                "Building blocks and construction sets (e.g., LEGO, magnetic tiles)",
                "Recycled materials for open-ended building (e.g., cardboard, bottle caps)",
                "Tools for tinkering (e.g., child-safe hammers, screwdrivers)",
                "Water tables and materials for experimenting with flow and buoyancy",
                "Outdoor loose parts (e.g., sticks, stones, pipes) for creative engineering play",
            ]}
            learningExamples={{
                "0-2": [
                    "Stacking and knocking down blocks",
                    "Exploring cause and effect with simple ramps",
                    "Fitting shapes into sorters or puzzles",
                ],
                "2-3": [
                    "Building towers or bridges with blocks",
                    "Experimenting with balance and stability",
                    "Creating simple machines like seesaws using loose parts",
                ],
                "3-5": [
                    "Designing and testing structures with various materials",
                    "Exploring pulleys and levers in play scenarios",
                    "Collaborative projects like building forts or obstacle courses",
                ],
                "6-8": [
                    "Participating in age-appropriate robotics or coding activities",
                    "Solving real-world challenges like designing a shelter",
                    "Experimenting with circuits and basic engineering kits",
                ],
            }}
            creativeActivities={[
                {
                    ageGroup: "0-2",
                    title: "Ramp Play",
                    description:
                        "Provide ramps of different materials and objects to roll down, encouraging exploration of motion and cause-effect relationships.",
                },
                {
                    ageGroup: "2-3",
                    title: "Bridge Builders",
                    description:
                        "Challenge children to build a bridge using blocks to support a toy car, promoting critical thinking and experimentation.",
                },
                {
                    ageGroup: "3-5",
                    title: "Wind-Powered Vehicles",
                    description:
                        "Guide children to create simple vehicles powered by wind using paper, straws, and wheels, sparking curiosity about motion.",
                },
            ]}
            ageGroupVideos={videoSources.physicalEducation}
            criticalReflection="Implementing a comprehensive physical education program in early childhood has shown me the profound impact movement has on children's overall development. By providing a variety of structured and unstructured physical activities, I've observed improvements in children's coordination, confidence, and social skills. Integrating physical activities throughout the day, such as movement breaks during cognitive tasks or using active games to teach academic concepts, has enhanced engagement and learning across all areas of the curriculum. It's crucial to create an inclusive environment that celebrates diverse abilities and encourages all children to participate and enjoy physical activity. I've found that involving families and educating them about the importance of physical activity has helped reinforce healthy habits beyond the classroom."
        />
    );
}
