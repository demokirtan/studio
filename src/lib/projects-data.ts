export type Project = {
  id: string;
  title: string;
  category: string;
  imageId: string;
  featured?: boolean;
  meta?: string;
  description: string;
};

export const projects: Project[] = [
  {
    id: "1",
    title: "ONLINE FOOD DELIVERY MANAGEMENT",
    category: "Web Development",
    imageId: "project-1",
    description: "Developed a food delivery platform using HTML for the frontend, MySQL for the database, and PHP for the backend. The system allows users to browse restaurant menus, place orders, and track deliveries. Admins can manage orders, update menu items, and handle customer requests."
  },
  {
    id: "2",
    title: "RESTRO AND CAFE MANAGEMENT SYSTEM",
    category: "Web Development",
    imageId: "project-2",
    description: "Developed a restaurant/café management system using ASP.NET and SQL Server. The system allows for efficient order management, billing, and inventory tracking, with features like table management and customer service."
  },
  {
    id: "3",
    title: "ONLINE CLOTHING SHOP MANAGEMENT SYSTEM",
    category: "Web Development",
    imageId: "project-3",
    description: "Created an online clothing shop management system using the MERN stack (MongoDB, Express.js, React.js, Node.js). The system includes features like user authentication, product listing, and order management."
  },
  {
    id: "4",
    title: "FILE CONVERSION WEB APPLICATION",
    category: "Web Development",
    imageId: "project-4",
    description: "Developed a file conversion web app using Python, Django, and React.js. The platform allows users to convert PDF to Word, Word to PDF, and merge PDFs. The user-friendly interface enables quick file uploads and conversions."
  },
];
