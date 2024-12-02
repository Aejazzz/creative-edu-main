import { videoSources } from "@/lib/videoSources";
import CurriculumArea from "../../components/CurriculumArea";

export default function DramaPage() {
    return (
        <CurriculumArea
            title="Drama in Early Childhood Education"
            introduction="Drama and puppetry are integral to the EYLF’s vision of fostering creativity, communication, and social-emotional development in young children. Through role-play and storytelling, children develop the skills to navigate relationships, understand different perspectives, and express their ideas. These activities contribute to Outcome 2—Children are connected with and contribute to their world—by encouraging collaboration and empathy, as well as Outcome 5—Children are effective communicators, by building language and storytelling abilities.

Drama enables children to explore their emotions and solve problems creatively, while puppetry offers a medium for even the most reserved learners to share their thoughts and feelings. Together, they help children build confidence, resilience, and a sense of belonging.
"
            perspectives="Drama and puppetry reflect Vygotsky’s sociocultural theory, emphasizing the role of social interaction and cultural practices in learning. Piaget’s constructivist theory also underpins these activities, recognizing the importance of hands-on experiences in fostering creative and cognitive development. The EYLF supports these perspectives by advocating for play-based learning, where children actively construct meaning through imaginative activities."
            resources={[
                "Dress-up clothes and props",
                "Puppets and puppet theaters",
                "Story dice or cards for improvisation",
                "Simple stage or performance area",
                "Audio equipment for sound effects and music",
            ]}
            learningExamples={{
                "0-2": [
                    "Peek-a-boo games",
                    "Simple finger plays and action songs",
                    "Mimicking animal sounds and movements",
                ],
                "2-3": [
                    "Role-playing familiar scenarios (e.g., grocery shopping, doctor visit)",
                    "Simple puppet shows",
                    "Acting out favorite stories",
                ],
                "3-5": [
                    "Creating and performing short skits",
                    "Emotion recognition and expression exercises",
                    "Improvisation games",
                ],
                "6-8": [
                    "Writing and performing original plays",
                    "Character development exercises",
                    "Exploring different theatrical styles",
                ],
            }}
            creativeActivities={[
                {
                    ageGroup: "0-2",
                    title: "Mirror Play",
                    description:
                        "Encourage babies and toddlers to mimic facial expressions and simple gestures in a mirror or with a partner.",
                },
                {
                    ageGroup: "2-3",
                    title: "Story Box Theater",
                    description:
                        "Create a 'story box' filled with random objects. Children take turns pulling out items and incorporating them into an improvised story.",
                },
                {
                    ageGroup: "3-5",
                    title: "Emotion Masks",
                    description:
                        "Have children create masks representing different emotions, then act out scenarios using their masks to express feelings.",
                },
            ]}
            ageGroupVideos={videoSources.drama}
            criticalReflection="In incorporating drama and puppetry, I have learned to value the EYLF principle of ongoing learning and reflective practice. Observing children’s engagement in these activities has taught me to adapt my strategies to meet their interests and developmental needs. By designing inclusive scenarios and encouraging collaboration, I’ve enhanced my ability to support creativity, confidence, and empathy in young learners."
        />
    );
}
