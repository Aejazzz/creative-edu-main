"use client";

import { motion } from "framer-motion";

export default function ReferencesPage() {
    const references = [
        “Australian Government Department of Education. (2009). Belonging, being and becoming: The early years learning framework for Australia. Commonwealth of Australia.
https://www.education.gov.au/early-years-learning-framework",
“Australian Children's Education & Care Quality Authority (ACECQA). (2020). The National Quality Framework for Early Childhood Education and Care. ACECQA.
https://www.acecqa.gov.au”,
“Berk, L. E. (2013). Child development (9th ed.). Pearson Education.”,
“Bruder, M. B., & McWilliam, R. A. (2013). Early childhood special education: The global challenge. Paul H. Brookes Publishing.”,
“Chappell, S., & Burbidge, D. (2011). Creativity and young children: The role of the early childhood educator. Early Childhood Education Journal, 39(3), 169-178.
https://doi.org/10.1007/s10643-010-0421-0”,
“Gardner, H. (1983). Frames of mind: The theory of multiple intelligences. Basic Books.”,
“Ginsburg, K. R. (2007). The importance of play in promoting healthy child development and maintaining strong parent-child bonds. Pediatrics, 119(1), 182-191.”,
https://doi.org/10.1542/peds.2006-2697
“MacNaughton, G., & Williams, G. (2009). Techniques for teaching young children: Choices for theory and practice (4th ed.). Pearson Education.”,
“National Association for the Education of Young Children (NAEYC). (2010). Developmentally appropriate practice in early childhood programs serving children from birth through age 8 (3rd ed.). NAEYC.”,
“Perry, B. D. (2009). Examining the role of the arts in early childhood education and the implications for creativity. Early Childhood Education Journal, 37(4), 303-311.
https://doi.org/10.1007/s10643-009-0323-5”,
“Piaget, J. (1952). The origins of intelligence in children. International Universities Press.”,
“Vygotsky, L. S. (1978). Mind in society: The development of higher psychological processes. Harvard University Press.”,
“Wright, S. (2010). Understanding creativity in early childhood: Meaning-making and children's learning. Sage Publications.”,
“Yelland, N. (2014). Creativity and the curriculum: Creating dynamic learning environments in early childhood education. Springer.”,
“Zigler, E., & Bishop-Josef, S. J. (2006). The case for early childhood education: Securing the foundation for a lifetime of learning. Social Policy Report, 20(1), 3-13.
https://doi.org/10.1007/s11628-006-0021-3”,

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
