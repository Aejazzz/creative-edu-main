import { videoSources } from "@/lib/videoSources";
import CurriculumArea from "../../components/CurriculumArea";

export default function LanguagePage() {
    return (
        <CurriculumArea
            title="Language in Early Childhood Education"
            introduction="Language and literacy are essential tools for creativity, enabling children to communicate their ideas, express emotions, and connect with others. Within the EYLF, these areas are integral to Outcome 5—Children are effective communicators. Through storytelling, imaginative play, and writing activities, children develop skills in listening, speaking, reading, and writing, fostering creativity and critical thinking.
The EYLF recognizes that language and literacy also play a crucial role in building cultural awareness and inclusion. Activities such as shared reading, creating stories, and exploring diverse texts provide children with opportunities to connect with their community and the wider world, supporting Outcome 2—Children are connected with and contribute to their world.
"
            perspectives="The creative aspect of language and literacy aligns with Vygotsky’s emphasis on the role of language in cognitive development. Piaget’s constructivist theory also supports the view that children construct knowledge through active exploration and interaction with texts. The EYLF emphasizes holistic approaches, where literacy is embedded in meaningful, play-based experiences that inspire creativity and engagement."
            resources={[
                "Age-appropriate books in various genres",
                "Puppets and props for storytelling",
                "Letter recognition games and materials",
                "Writing materials (crayons, markers, paper)",
                "Audio books and storytelling apps",
            ]}
            learningExamples={{
                "0-2": [
                    "Reading board books and naming objects",
                    "Singing nursery rhymes and simple songs",
                    "Responding to and imitating sounds and gestures",
                ],
                "2-3": [
                    "Engaging in conversation and turn-taking",
                    "Matching objects to pictures in books",
                    "Scribbling and early mark-making",
                ],
                "3-5": [
                    "Retelling stories and creating simple narratives",
                    "Recognizing letters and their sounds",
                    "Attempting to write own name and familiar words",
                ],
                "6-8": [
                    "Reading simple texts independently",
                    "Writing short stories or journal entries",
                    "Exploring different genres of literature",
                ],
            }}
            creativeActivities={[
                {
                    ageGroup: "0-2",
                    title: "Texture Story Bags",
                    description:
                        "Create story bags with various textured items related to a simple story, encouraging sensory exploration and vocabulary development as you narrate.",
                },
                {
                    ageGroup: "2-3",
                    title: "Story Stones",
                    description:
                        "Paint simple images on stones and use them to create and tell stories, fostering narrative skills and imagination.",
                },
                {
                    ageGroup: "3-5",
                    title: "Alphabet Nature Hunt",
                    description:
                        "Go on a nature walk and challenge children to find items that start with different letters, combining outdoor exploration with letter recognition and phonics.",
                },
            ]}
            ageGroupVideos={videoSources.language}
            criticalReflection="Facilitating creativity in language and literacy has enhanced my understanding of how stories and texts shape children’s learning journeys. Encouraging children to create their own narratives has deepened my ability to foster confidence and a love of learning. This reflective practice aligns with the EYLF principle of ongoing learning and reflective practice, inspiring me to continually adapt my teaching strategies to meet the diverse needs of young learners."
        />
    );
}
