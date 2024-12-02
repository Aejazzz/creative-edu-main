"use client";

import { motion } from "framer-motion";

export default function ReferencesPage() {
    const references = [
        "Australian Government Department of Education. (2009). Belonging, being and becoming: The early years learning framework for Australia. Commonwealth of Australia. https://www.education.gov.au/early-years-learning-framework",
        "Australian Children's Education & Care Quality Authority (ACECQA). (2020). The National Quality Framework for Early Childhood Education and Care. ACECQA. https://www.acecqa.gov.au",
        "Berk, L. E. (2013). Child development (9th ed.). Pearson EducationMalaguzzi, L. (1993). For an Education Based on Relationships. Young Children, 49(1), 9-12.",
        "Bruder, M. B., & McWilliam, R. A. (2013). Early childhood special education: The global challenge. Paul H. Brookes PublishingVygotsky, L. S. (1978). Mind in Society: The Development of Higher Psychological Processes. Harvard University Press.",
        "Chappell, S., & Burbidge, D. (2011). Creativity and young children: The role of the early childhood educator. Early Childhood Education Journal, 39(3), 169-178. https://doi.org/10.1007/s10643-010-0421-0 Edwards, C., Gandini, L., & Forman, G. (Eds.). (2011). The Hundred Languages of Children: The Reggio Emilia Experience in Transformation. Praeger.",
        "Gardner, H. (1983). Frames of mind: The theory of multiple intelligences. Basic BooksCraft, A. (2002). Creativity and Early Years Education: A Lifewide Foundation. Continuum.",
        "RGinsburg, K. R. (2007). The importance of play in promoting healthy child development and maintaining strong parent-child bonds. Pediatrics, 119(1), 182-191unco, M. A. (2003). Education for Creative Potential. Scandinavian Journal of Educational Research, 47(3), 317-324.",
        "MacNaughton, G., & Williams, G. (2009). Techniques for teaching young children: Choices for theory and practice (4th ed.). Pearson EducationPlucker, J. A., Beghetto, R. A., & Dow, G. T. (2004). Why Isn't Creativity More Important to Educational Psychologists? Potentials, Pitfalls, and Future Directions in Creativity Research. Educational Psychologist, 39(2), 83-96.",
        "National Association for the Education of Young Children (NAEYC). (2010). Developmentally appropriate practice in early childhood programs serving children from birth through age 8 (3rd ed.). NAEYC.Torrance, E. P. (1972). Can We Teach Children To Think Creatively?. The Journal of Creative Behavior, 6(2), 114-143.",
        "CPerry, B. D. (2009). Examining the role of the arts in early childhood education and the implications for creativity. Early Childhood Education Journal, 37(4), 303-311. https://doi.org/10.1007/s10643-009-0323-5 sikszentmihalyi, M. (1996). Creativity: Flow and the Psychology of Discovery and Invention. Harper Collins Publishers.",
        "Piaget, J. (1952). The origins of intelligence in children. International Universities Press.",
        "Vygotsky, L. S. (1978). Mind in society: The development of higher psychological processes. Harvard University Press.",
        "Wright, S. (2010). Understanding creativity in early childhood: Meaning-making and children's learning. Sage Publications.",
        "Yelland, N. (2014). Creativity and the curriculum: Creating dynamic learning environments in early childhood education. Springer.",
        "Zigler, E., & Bishop-Josef, S. J. (2006). The case for early childhood education: Securing the foundation for a lifetime of learning. Social Policy Report, 20(1), 3-13. https://doi.org/10.1007/s11628-006-0021-3",
    ];

    return (
        <motion.div
            className="space-y-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}>
            <motion.h1
                className="text-5xl font-bold text-center mb-12"
                initial={{ y: -20 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}>
                References
            </motion.h1>
            <motion.ul
                className="space-y-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}>
                {references.map((reference, index) => (
                    <motion.li
                        key={index}
                        className="bg-white p-4 rounded-lg shadow-md"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: index * 0.1 }}>
                        {reference}
                    </motion.li>
                ))}
            </motion.ul>
        </motion.div>
    );
}
