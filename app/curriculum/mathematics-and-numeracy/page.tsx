import { videoSources } from "@/lib/videoSources";
import CurriculumArea from "../../components/CurriculumArea";

export default function MathematicsAndNumeracyPage() {
    return (
        <CurriculumArea
            title="Mathematics and Numeracy Education in Early Childhood"
            introduction="Mathematics and numeracy are fundamental in fostering logical thinking, problem-solving, and creativity in early childhood education. The EYLF encourages the integration of mathematical concepts into everyday learning experiences, ensuring that children are provided with opportunities to explore and apply their understanding of numbers, patterns, and spatial awareness. Through hands-on activities such as counting, sorting, and measuring, children develop both cognitive and creative skills, laying the foundation for future mathematical learning.
Mathematics also supports Outcome 4—Children are confident and involved learners—by encouraging children to experiment with mathematical concepts in meaningful contexts. It helps develop a sense of order and structure while also fostering creative thinking through puzzles, games, and problem-solving scenarios.
"
            perspectives="Mathematical creativity is supported by Piaget’s theory of cognitive development, where children’s active engagement with objects and materials helps them form logical and mathematical understandings. The EYLF emphasizes the importance of integrating mathematics into play, where children can explore mathematical concepts through creative activities such as constructing shapes, building patterns, or exploring number relationships in real-world contexts. Mathematics, in this sense, becomes a form of creative exploration."
            resources={[
                "Magnifying glasses and binoculars",
                "Nature journals and field guides",
                "Gardening tools and seeds",
                "Weather observation tools",
                "Natural loose parts for play and creation",
            ]}
            learningExamples={{
                "0-2": [
                    "Sensory exploration of natural materials",
                    "Outdoor tummy time and crawling",
                    "Observing and imitating animal sounds",
                ],
                "2-3": [
                    "Nature scavenger hunts",
                    "Simple planting activities",
                    "Weather observation and discussion",
                ],
                "3-5": [
                    "Creating nature art and mandalas",
                    "Basic plant and animal life cycle observations",
                    "Outdoor sensory and gross motor activities",
                ],
                "6-8": [
                    "Conducting simple environmental experiments",
                    "Keeping nature journals",
                    "Participating in conservation projects",
                ],
            }}
            creativeActivities={[
                {
                    ageGroup: "0-2",
                    title: "Natural Texture Board",
                    description:
                        "Create a board with various natural textures (bark, leaves, moss) for babies to safely explore, promoting sensory development and early nature connection.",
                },
                {
                    ageGroup: "2-3",
                    title: "Mini Beast Hotel",
                    description:
                        "Build a simple 'hotel' for insects using natural materials, encouraging observation of small creatures and fostering empathy for living things.",
                },
                {
                    ageGroup: "3-5",
                    title: "Seasonal Change Documentation",
                    description:
                        "Regularly photograph a specific outdoor area throughout the year, discussing and documenting seasonal changes observed by the children.",
                },
            ]}
            ageGroupVideos={videoSources.nature}
            criticalReflection="Facilitating numeracy-based creative activities has deepened my appreciation for how mathematics can be a fun and imaginative process. Encouraging children to solve real-world problems, such as measuring ingredients for a recipe or organizing objects by size and color, has shown me how math is not just about numbers, but also about creativity in exploration and discovery. This aligns with the EYLF’s emphasis on learning through play and high expectations and equity, ensuring that all children have equal opportunities to develop mathematical thinking in an engaging and supportive environment."
        />
    );
}
