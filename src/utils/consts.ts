export const NAVIGATION = {
  HOME: {
    SLUG: "/",
    NAME: "Go Home",
  },
  UPGRADE: {
    SLUG: "/upgrade",
    NAME: "Upgrade",
  },
  EVENTS: {
    PUSHSTATE: "pushstate" as const,
    POPSTATE: "popstate" as const,
  },
}
export const HEAD_DATA_FORM = {
  INPUTS: {
    FULL_NAME: {
      KEY: "fullName" as const,
      LABEL: "Full Name",
      PLACEHOLDER: "John Doe",
      AUTOCOMPLETE: "name",
      INSTRUCTION: "give me a random name",
      REQUIRED: true,
    },
    PHOTO: {
      KEY: "photo" as const,
      LABEL: "Photo",
    },
  },
  TITLE: "Name and Photo",
}
export const PERSONAL_DATA_FORM = {
  INPUTS: {
    LOCATION: {
      KEY: "location" as const,
      LABEL: "Location",
      PLACEHOLDER: "Austin, Texas, USA",
      REQUIRED: true,
      AUTOCOMPLETE: "address-level2",
      INSTRUCTION:
        'Provide a valid example of an address at the administrative level 2 (typically city or municipality) from anywhere in the world, excluding "Austin, Texas, USA". Format it as "City, State/Province, Country"',
    },
    EMAIL: {
      KEY: "email" as const,
      LABEL: "Email",
      PLACEHOLDER: "johndoe@example.com",
      REQUIRED: true,
      AUTOCOMPLETE: "email",
      INSTRUCTION:
        'Provide a valid example of an email address different from "johndoe@example.com". Format it as a standard email (e.g., username@domain.com).',
    },
    ADDRESS: {
      KEY: "address" as const,
      LABEL: "Address",
      PLACEHOLDER: "1234 Elm Street, Apartment 56",
      REQUIRED: false,
      AUTOCOMPLETE: "street-address",
      INSTRUCTION:
        'Provide a valid example of a street address from anywhere in the world, excluding "1234 Elm Street, Apartment 56". Include street number, street name, and any secondary address info if applicable.',
    },
    PHONE: {
      KEY: "phone" as const,
      LABEL: "Phone",
      PLACEHOLDER: "+1 800 555 1212, +54 9 1123456789",
      REQUIRED: false,
      AUTOCOMPLETE: "tel",
      INSTRUCTION:
        'Provide a valid phone number from anywhere in the world, excluding "+1 800 555 1212". Include country code and number, formatted with spaces or dashes.',
    },
  },
  TITLE: "Personal Information",
}
export const EDUCATION_FORM = {
  INPUTS: {
    INSTITUTION: {
      KEY: "institution" as const,
      LABEL: "Institution",
      PLACEHOLDER: "Harvard University",
      REQUIRED: true,
      AUTOCOMPLETE: "organization",
      INSTRUCTION:
        'Provide a valid example of an organization name from anywhere in the world. The organization must be a university, college, or any similar organization. Do not use "Harvard University". Include the full official name, spelled correctly.',
    },
    LOCATION: {
      KEY: "educationLocation" as const,
      LABEL: "Location",
      PLACEHOLDER: "Cambridge, MA, USA",
      REQUIRED: true,
      AUTOCOMPLETE: "address-level2",
      INSTRUCTION:
        'Provide a valid example of an address-level 2 location (city or municipality) from anywhere in the world, excluding "Cambridge, MA, USA". Include the city, state or province, and country. Do not provide only the country.',
    },
    YEAR: {
      KEY: "year" as const,
      LABEL: "Year",
      PLACEHOLDER: "2022",
      REQUIRED: true,
      AUTOCOMPLETE: "bday-year",
      INSTRUCTION:
        "Provide a valid year as a four-digit number between 1990 and 2024.",
    },
    GPA: {
      KEY: "gpa" as const,
      LABEL: "GPA",
      PLACEHOLDER: "3.9/4",
      REQUIRED: false,
      INSTRUCTION:
        'Generate a random GPA in the format "x/y" where x is a whole or decimal number representing the score, and y is a whole number representing the maximum possible score. Include both numbers separated by a slash. Examples: "3.9/4", "7.5/10", or "80/100".',
    },
    THESIS: {
      KEY: "thesis" as const,
      LABEL: "Highlighted Project/Thesis",
      PLACEHOLDER: "AI for Social Good: Predictive Modeling in Public Health",
      REQUIRED: false,
      INSTRUCTION:
        'Provide a title for a thesis or highlighted project. The title can be from any academic field or topic, not necessarily technology. Do not use "AI for Social Good: Predictive Modeling in Public Health" or any variation of it. The title should be clear and descriptive.',
    },
    RELATED_SUBJECTS: {
      KEY: "relatedSubjects" as const,
      LABEL: "Related Subjects",
      PLACEHOLDER: "Machine Learning, Ethics in AI, Data Science",
      REQUIRED: false,
      INSTRUCTION:
        'Provide a list of related college subjects or courses relevant to a field of work. The subjects can be from any discipline and do not have to be technology-related. Do not use "Machine Learning," "Ethics in AI," or "Data Science." List at least two or three subjects, separated by commas.',
    },
  },
  TITLE: "Studies",
}
export const EXPERIENCE_FORM = {
  INPUTS: {
    PLACE: {
      KEY: "place" as const,
      LABEL: "Company or Organization",
      PLACEHOLDER: "Google LLC",
      REQUIRED: true,
      AUTOCOMPLETE: "organization",
      INSTRUCTION:
        'Provide the name of a company or organization from anywhere in the world. It can be from any industry or sector, not limited to technology. Do not use "Google LLC" or any variation of it. The name should be the full official name, spelled correctly.',
    },
    ROLE: {
      KEY: "role" as const,
      LABEL: "Position or Role",
      PLACEHOLDER: "Software Engineering Intern",
      REQUIRED: true,
      AUTOCOMPLETE: "organization-title",
      INSTRUCTION:
        'Provide a job position or role within a company or organization. The role can be from any industry or department and does not need to be technology-related. Do not use "Software Engineering Intern" or any variation of it. The response should be clear and include the job title.',
    },
    EXPERIENCE_LOCATION: {
      KEY: "experienceLocation" as const,
      LABEL: "Location",
      PLACEHOLDER: "Mountain View, CA, USA",
      REQUIRED: true,
      AUTOCOMPLETE: "address-level2",
      INSTRUCTION:
        'Provide a valid address-level 2 location (city or municipality) from anywhere in the world, excluding "Mountain View, CA, USA". Include city, state or province, and country.',
    },
    FROM: {
      KEY: "from" as const,
      LABEL: "Start Date",
      PLACEHOLDER: "June 2021",
      REQUIRED: false,
      TYPE: "date",
      INSTRUCTION: 'Provide a date in the format "yyyy-MM-dd".',
    },
    TO: {
      KEY: "to" as const,
      LABEL: "End Date",
      PLACEHOLDER: "August 2021",
      REQUIRED: false,
      TYPE: "date",
      INSTRUCTION: 'Provide a date in the format "yyyy-MM-dd".',
    },
    TASKS: {
      KEY: "tasks" as const,
      LABEL: "Key Responsibilities or Achievements",
      PLACEHOLDER: "Improved project tracking system; Created clear workflows;",
      REQUIRED: true,
      INSTRUCTION:
        'Provide a list of tasks or achievements that could be done while working, each separated by a semicolon (;). The tasks do not need to be technology-related. Always include at least three tasks or achievements. Do not use "Improved project tracking system; Created clear workflows;" or any variation of it.',
    },
  },
  TITLE: "Working Experience",
}
export const PROJECTS_FORM = {
  INPUTS: {
    TITLE: {
      KEY: "title" as const,
      LABEL: "Related Project/Activity",
      PLACEHOLDER: "Data Analysis Project",
      REQUIRED: true,
      INSTRUCTION:
        'Provide the name of a project or activity related to a type of work. The project can be from any field and does not need to be technology-related. Do not use "Data Analysis Project" or any variation of it. The name should be clear and descriptive.',
    },
    EXPLANATION: {
      KEY: "explanation" as const,
      LABEL: "Explanation",
      PLACEHOLDER: "Managed client communications; Delivered weekly reports;",
      REQUIRED: true,
      INSTRUCTION:
        'Provide a list of explanations for a project related to a type of work, each separated by a semicolon (;). The explanations should describe tasks or activities done during the project and do not need to be technology-related. Do not use "Managed client communications; Delivered weekly reports;" or any variation of it. Do not include the project name, just the explanations.',
    },
    FROM: {
      KEY: "projectFrom" as const,
      LABEL: "Start Date",
      PLACEHOLDER: "June 2021",
      REQUIRED: false,
      TYPE: "date",
      INSTRUCTION: 'Provide a date in the format "yyyy-MM-dd".',
    },
    TO: {
      KEY: "projectTo" as const,
      LABEL: "End Date",
      PLACEHOLDER: "August 2021",
      REQUIRED: false,
      TYPE: "date",
      INSTRUCTION: 'Provide a date in the format "yyyy-MM-dd".',
    },
  },
  TITLE: "Related Projects/Activities",
}
export const SKILLS_FORM = {
  INPUTS: {
    CATEGORY: {
      KEY: "category" as const,
      LABEL: "Select a Category",
      PLACEHOLDER: "",
      REQUIRED: true,
      TYPE: "select",
      CATEGORIES: ["technical", "language", "tool", "interests"] as const,
    },
    SKILL: {
      KEY: "skill" as const,
      LABEL: "Your Skill",
      PLACEHOLDER: "Project Management, English, Microsoft Excel, Traveling",
      REQUIRED: true,
      INSTRUCTION:
        'Provide a list of skills, comma-separated. The skills can be from any field and do not need to be technology-related. Always include at least three skills. Do not use "Project Management, English, Microsoft Excel, Traveling" or any variation of it.',
    },
  },
  TITLE: "Skills",
}
export const SKILL_PLACEHOLDERS: Record<string, string[]> = {
  technical: [
    "Project Management",
    "Data Analysis",
    "Software Development",
    "Problem Solving",
  ],
  language: ["English", "Spanish", "French", "German"],
  tool: ["Microsoft Excel", "Photoshop", "Salesforce", "Google Analytics"],
  interests: ["Traveling", "Photography", "Reading", "Sports"],
}
export const SKILL_INSTRUCTIONS: Record<string, string> = {
  technical:
    'Provide a list of technical skills, comma-separated. The skills can be from any field and do not need to be technology-related. Always include at least three skills. Do not use "Project Management, Data Analysis, Software Development, Problem Solving" or any variation of it.',
  language:
    'Provide a list of languages, comma-separated. Include both common and uncommon languages. Always include at least three languages. Do not use "Italian, German" or any variation of these.',
  tool: 'Provide a list of languages, comma-separated. Include both common and uncommon languages. Always include at least three languages. Do not use "Italian, German" or any variation of these.',
  interests:
    'Provide a list of interests or hobbies, comma-separated. Include both common and unique interests. Always include at least three. Do not use "Traveling, Photography, Reading, Sports" or any variation of these.',
}
export const CREATE_RESUME = {
  TITLE: "Your Resume Is Done",
  WARNING: "we recommend opening the file twice",
}
export const BUTTON_LABEL = {
  SAVE: "Save",
  CANCEL: "Cancel",
  ADD_EDUCATION: "Add Education",
  ADD_EXPERIENCE: "Add Experience",
  ADD_PROJECT: "Add Project/Activity",
  ADD_SKILL: "Add Skill",
  DOWNLOAD_PDF: "Download PDF",
  DOWNLOAD_WORD: "Download Word less recommended",
}
export const ERROR = {
  HEAD_DATA: {
    SHORT: "Full name must have at least 2 characters.",
    ONLY_ALPHABETICAL:
      "Name only should have alphabetic characters and white spaces.",
    INVALID_FORMAT: "Invalid format or content",
  },
  PERSONAL_DATA: {
    ADDRESS_LENGTH: "Address must be at least 10 characters long.",
    LOCATION_REQUIRED: "Location is required.",
    LOCATION_EMPTY: "Location cannot be empty.",
    LOCATION_FORMAT: "Location can only contain letters and spaces.",
    EMAIL_REQUIRED: "Email is required.",
    EMAIL_FORMAT: "Invalid email format.",
    PHONE_FORMAT: "Invalid phone number format.",
  },
  EDUCATION: {
    INSTITUTION_REQUIRED: "Institution is required",
    LOCATION_REQUIRED: "Location is required",
    YEAR_REQUIRED: "Year is required",
    GPA_FORMAT:
      "GPA format must be 'x/y', where x is a whole or decimal number, and y is a whole number.",
    YEAR_VALIDATION: "Year must be at least the current year.",
    THESIS_TEXT: "If thesis is provided, it must be a non-empty text.",
    RELATED_SUBJECTS_TEXT:
      "If related subjects are provided, they must be non-empty text.",
  },
  EXPERIENCE: {
    PLACE_REQUIRED: "Place is required.",
    ROLE_REQUIRED: "Role is required.",
    LOCATION_REQUIRED: "Location is required.",
    FROM_REQUIRED: "Start date is required.",
    TO_REQUIRED: "End date is required.",
    TASKS_REQUIRED: "At least one task is required.",
    TASKS_EMPTY_STRING: "Task cannot be an empty string.",
    FROM_BEFORE_TO: "Start date must be before end date.",
    INVALID_FROM_DATE: "Invalid start date",
    INVALID_TO_DATE: "Invalid finish date",
    SPLIT_TASKS: "Tasks must be separated using semicolon ';'",
    FROM_NOT_IN_FUTURE: "Start date cannot be in the future",
  },
  PROJECT: {
    TITLE_REQUIRED: "Title is required.",
    EXPLANATION_SEPARATOR_REQUIRED:
      "Explanation must include at least one semicolon ';' to separate items.",
    EXPLANATION_MIN_ITEMS: "Please provide at least two explanation items.",
    INVALID_FROM_DATE: "Start date is not valid.",
    INVALID_TO_DATE: "End date is not valid.",
    BOTH_DATES_REQUIRED: "If you provide one date, you must provide both.",
    FROM_BEFORE_TO: "Start date must be before or equal to end date.",
  },
  SKILLS: {
    CATEGORY: "Category is required",
    SKILL: "Skill is required",
  },
}
export const FORM_POSITION = {
  HEAD_DATA: 0,
  PERSONAL_DATA: 1,
  EDUCATION: 2,
  EXPERIENCE: 3,
  PROJECT: 4,
  SKILLS: 5,
  CREATE_RESUME: 6,
}
export const FORMS_AMOUNT = 6
export const HOME_TITLE = "Generate Your Resume"
export const UPGRADE_TITLE = "Boost Your Resume With AI"
export const ADVICE = {
  PART1: "Unlock AI-powered resume generation.",
  PART2: "Upgrade to Pro to get started!",
}
export const NAV_BUTTONS = {
  BACK: "Back",
  NEXT: "Next",
}
