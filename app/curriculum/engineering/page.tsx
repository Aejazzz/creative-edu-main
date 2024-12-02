import { videoSources } from "@/lib/videoSources";
import CurriculumArea from "../../components/CurriculumArea";

export default function EngineeringPage() {
    return (
        <CurriculumArea
            title="Engineering Education in Early Childhood"
            introduction="Engineering encourages children to apply their creative thinking to solve practical problems, fostering critical thinking, innovation, and teamwork. Within the EYLF, engineering activities support Outcome 4—Children are confident and involved learners—by encouraging children to experiment with materials, test ideas, and explore cause and effect. Engineering also plays a crucial role in developing fine motor skills and spatial awareness, as children build and design structures.
Through activities such as building with blocks, designing simple machines, or engaging in engineering challenges, children learn to think critically and collaboratively, laying the foundation for innovation. These activities support Outcome 3—Children have a strong sense of well-being—as children build confidence and resilience by solving problems and overcoming challenges.
"
            perspectives="Engineering in early childhood education draws on the principles of design thinking, which encourages children to empathize, define problems, ideate, prototype, and test solutions. The EYLF embraces this process by fostering environments where children can engage in inquiry-based learning, experimentation, and collaboration. Piaget’s theory of cognitive development also supports engineering’s role in developing logical thinking and problem-solving skills in young children."
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
            criticalReflection="Through facilitating engineering activities, I’ve come to appreciate the importance of providing children with opportunities to experiment and create without fear of failure. By offering materials that encourage open-ended exploration, I am able to support children’s problem-solving abilities and their confidence in approaching challenges. This approach aligns with the EYLF principle of learning through play, where children’s curiosity drives their understanding of the world."
        />
    );
}
