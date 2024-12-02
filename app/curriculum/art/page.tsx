import { videoSources } from "@/lib/videoSources";
import CurriculumArea from "../../components/CurriculumArea";

export default function ArtPage() {
    return (
        <CurriculumArea
            title="Art in Early Childhood Education"
            introduction="Art plays a fundamental role in fostering creativity as emphasized by the EYLF. It provides children with opportunities to express themselves, explore their identities, and connect with the world around them. Through drawing, painting, and other forms of artistic expression, children develop a sense of agency and individuality. The EYLF Outcome 4—Children are confident and involved learners—highlights the importance of creativity in promoting problem-solving, experimentation, and innovation.

Incorporating art into early childhood education aligns with Outcome 5—Children are effective communicators, as children use various artistic media to share their ideas, thoughts, and feelings. Artistic activities also encourage cultural awareness and inclusivity, fostering respect for diversity through collaborative projects and cultural exploration.
"
            perspectives="Art in early childhood education reflects Vygotsky’s sociocultural theory, which suggests that creativity develops through social interaction and the use of cultural tools. The EYLF also acknowledges the importance of cultural context in shaping children’s learning, encouraging educators to integrate diverse artistic practices. Gardner’s multiple intelligences theory supports this, emphasizing visual-spatial intelligence as a vital dimension of creativity, helping children make meaning from their experiences."
            resources={[
                "Various art materials (paints, crayons, clay, paper)",
                "Digital drawing apps for tablets",
                "Virtual museum tours",
                "Age-appropriate art history books",
                "Nature items for texture and pattern exploration",
            ]}
            learningExamples={{
                "0-2": [
                    "Finger painting with edible, non-toxic paints",
                    "Exploring textures with sensory boards",
                    "Simple color mixing activities",
                ],
                "2-3": [
                    "Creating collages with various materials",
                    "Basic shape drawing and identification",
                    "Playdough sculpting",
                ],
                "3-5": [
                    "Self-portrait drawing",
                    "Color theory experiments",
                    "Nature-inspired art projects",
                ],
            }}
            creativeActivities={[
                {
                    ageGroup: "0-2",
                    title: "Sensory Paint Bags",
                    description:
                        "Create sealed plastic bags filled with paint for babies to safely explore colors and textures.",
                },
                {
                    ageGroup: "2-3",
                    title: "Nature Paintbrushes",
                    description:
                        "Collect natural items like leaves and flowers to use as paintbrushes, encouraging exploration of textures and patterns.",
                },
                {
                    ageGroup: "3-5",
                    title: "Emotion Color Wheels",
                    description:
                        "Guide children in creating color wheels that represent different emotions, fostering emotional intelligence and color theory understanding.",
                },
            ]}
            ageGroupVideos={videoSources.art}
            // implementationEvidence={{
            //     type: "video",
            //     src: "/videos/art-implementation.mp4",
            // }}
            criticalReflection="In facilitating art activities, I have gained a deeper understanding of the importance of process over product, as supported by the EYLF principles of respect for diversity and high expectations and equity. Providing children with open-ended materials has reinforced my ability to nurture their creativity, encouraging exploration and self-expression. This practice has also enhanced my skills in creating inclusive environments where every child feels valued and capable of contributing their unique perspective."
        />
    );
}
