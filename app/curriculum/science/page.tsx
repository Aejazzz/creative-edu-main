import { videoSources } from "@/lib/videoSources";
import CurriculumArea from "../../components/CurriculumArea";

export default function SciencePage() {
    return (
        <CurriculumArea
            title="Emotional Intelligence in Early Childhood Education"
            introduction="Science fosters curiosity, problem-solving, and exploration, making it a key element in the EYLF. Through hands-on experiments, observations, and investigations, children explore the natural world, learning to ask questions and test hypotheses. Science activities support Outcome 4—Children are confident and involved learners, by encouraging children to engage in critical thinking and active experimentation.
By exploring scientific concepts such as cause and effect, measurement, and change, children develop a deep sense of inquiry and wonder. The EYLF Outcome 2—Children are connected with and contribute to their world—is supported as children investigate the environment, engage in sustainability practices, and learn about the world around them.
"
            perspectives="The role of creativity in science is supported by Piaget’s constructivist theory, where children’s active engagement in the discovery process fosters problem-solving and cognitive development. Vygotsky’s sociocultural theory also highlights the importance of collaborative exploration and guided interaction in scientific learning. The EYLF encourages educators to provide rich, stimulating environments where children’s scientific creativity is nurtured through inquiry-based learning."
            resources={[
                "Emotion cards and posters",
                "Puppets and dolls for role-playing",
                "Books about feelings and social situations",
                "Mindfulness and relaxation tools (e.g., breathing balls, calm-down jars)",
                "Emotion-focused music and movement materials",
            ]}
            learningExamples={{
                "0-2": [
                    "Mirroring facial expressions",
                    "Comforting routines and transitions",
                    "Simple naming of emotions during daily activities",
                ],
                "2-3": [
                    "Reading books about different emotions",
                    "Using feeling words in daily conversations",
                    "Simple breathing exercises for calming",
                ],
                "3-5": [
                    "Creating emotion collages or drawings",
                    "Role-playing different social scenarios",
                    "Practicing problem-solving steps for conflicts",
                ],
                "6-8": [
                    "Journaling about emotions and experiences",
                    "Engaging in group discussions about complex emotions",
                    "Developing and practicing coping strategies",
                ],
            }}
            creativeActivities={[
                {
                    ageGroup: "0-2",
                    title: "Emotion Mirror Play",
                    description:
                        "Use a mirror to help infants and toddlers recognize and imitate different facial expressions, fostering early emotional awareness.",
                },
                {
                    ageGroup: "2-3",
                    title: "Feelings Color Wheel",
                    description:
                        "Create a interactive color wheel where children can move an arrow to indicate their current emotion, promoting emotional vocabulary and self-awareness.",
                },
                {
                    ageGroup: "3-5",
                    title: "Emotion Charades",
                    description:
                        "Play a game where children act out different emotions for their peers to guess, enhancing emotional recognition and empathy.",
                },
            ]}
            ageGroupVideos={videoSources.emotionalIntelligence}
            criticalReflection="Facilitating science-based creative activities has enhanced my ability to foster curiosity and a love for exploration in young children. By providing opportunities for hands-on experiments, I can support children’s ability to think critically, make predictions, and test their ideas. This aligns with the EYLF principle of high expectations and equity, as I am committed to ensuring that all children, regardless of their background or abilities, have equal opportunities to engage in scientific inquiry."
        />
    );
}
