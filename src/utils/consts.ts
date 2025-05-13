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
        "give me a address level 2 from any part of the world, e.g: Austin, Texas, USA, but not this one",
    },
    EMAIL: {
      KEY: "email" as const,
      LABEL: "Email",
      PLACEHOLDER: "johndoe@example.com",
      REQUIRED: true,
      AUTOCOMPLETE: "email",
      INSTRUCTION:
        "give me an example email direction, e.g: johndoe@example.com, but not this one",
    },
    ADDRESS: {
      KEY: "address" as const,
      LABEL: "Address",
      PLACEHOLDER: "1234 Elm Street, Apartment 56",
      REQUIRED: false,
      AUTOCOMPLETE: "street-address",
      INSTRUCTION:
        "give me a street address from any part of the world, e.g: 1234 Elm Street, Apartment 56, but not this one",
    },
    PHONE: {
      KEY: "phone" as const,
      LABEL: "Phone",
      PLACEHOLDER: "+1 800 555 1212, +54 9 1123456789",
      REQUIRED: false,
      AUTOCOMPLETE: "tel",
      INSTRUCTION:
        "give me a phone number from any part of the world, e.g: +1 800 555 1212, but not this one",
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
        "give me the name of a college from any part of the world, e.g: Harvard University, but not this one.",
    },
    LOCATION: {
      KEY: "educationLocation" as const,
      LABEL: "Location",
      PLACEHOLDER: "Cambridge, MA, USA",
      REQUIRED: true,
      AUTOCOMPLETE: "address-level2",
      INSTRUCTION:
        "give me location from any part of the world, e.g: Cambridge, MA, USA, but not this one. Ensure to give the state too and not only the country",
    },
    YEAR: {
      KEY: "year" as const,
      LABEL: "Year",
      PLACEHOLDER: "2022",
      REQUIRED: true,
      AUTOCOMPLETE: "bday-year",
      INSTRUCTION:
        "give me a year, the year could be any year from 1990 to 2024",
    },
    GPA: {
      KEY: "gpa" as const,
      LABEL: "GPA",
      PLACEHOLDER: "3.9/4",
      REQUIRED: false,
      INSTRUCTION:
        "Generate a random GPA in the format 'x/y' where x is a score (whole or decimal number) and y is the maximum possible score (whole number). Example: '7.5/10' or '3/5'. Must include both numbers with a slash between them.",
    },
    THESIS: {
      KEY: "thesis" as const,
      LABEL: "Highlighted Project/Thesis",
      PLACEHOLDER: "AI for Social Good: Predictive Modeling in Public Health",
      REQUIRED: false,
      INSTRUCTION:
        "give me a title for a thesis, e.g: AI for Social Good: Predictive Modeling in Public Health, but not this one, it doesn't need to be about technology",
    },
    RELATED_SUBJECTS: {
      KEY: "relatedSubjects" as const,
      LABEL: "Related Subjects",
      PLACEHOLDER: "Machine Learning, Ethics in AI, Data Science",
      REQUIRED: false,
      INSTRUCTION:
        "give me a related subject that i could take while in college, related to a work, e.g: Machine Learning, Ethics in AI, Data Science, but not this ones, it doesn't need to be about technology",
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
        "give me the name of a company from any part of the world, e.g: Google LLC, but not this ones, it doesn't need to be about technology",
    },
    ROLE: {
      KEY: "role" as const,
      LABEL: "Position or Role",
      PLACEHOLDER: "Software Engineering Intern",
      REQUIRED: true,
      AUTOCOMPLETE: "organization-title",
      INSTRUCTION:
        "give me a position or role in a company, e.g: Software Engineering Intern, but not this ones, it doesn't need to be about technology",
    },
    EXPERIENCE_LOCATION: {
      KEY: "experienceLocation" as const,
      LABEL: "Location",
      PLACEHOLDER: "Mountain View, CA, USA",
      REQUIRED: true,
      AUTOCOMPLETE: "address-level2",
      INSTRUCTION:
        "give me a location from any part of the world, e.g: Mountain View, CA, USA, but not this one",
    },
    FROM: {
      KEY: "from" as const,
      LABEL: "Start Date",
      PLACEHOLDER: "June 2021",
      REQUIRED: true,
      TYPE: "date",
      INSTRUCTION: "give me a date with this format: yyyy-MM-dd",
    },
    TO: {
      KEY: "to" as const,
      LABEL: "End Date",
      PLACEHOLDER: "August 2021",
      REQUIRED: true,
      TYPE: "date",
      INSTRUCTION: "give me a date with this format: yyyy-MM-dd",
    },
    TASKS: {
      KEY: "tasks" as const,
      LABEL: "Key Responsibilities or Achievements",
      PLACEHOLDER: "Improved project tracking system; Created clear workflows;",
      REQUIRED: true,
      INSTRUCTION:
        "give me a list of tasks i could have done while working, each one separated by semicolon (;), e.g: Improved project tracking system; Created clear workflows;, but not this ones, it doesn't need to be about technology. Always give at least 3",
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
        "give me a related project or activity that i could have done related to a work, e.g: Data Analysis Project, but not this one, it doesn't need to be about technology",
    },
    EXPLANATION: {
      KEY: "explanation" as const,
      LABEL: "Explanation",
      PLACEHOLDER: "Managed client communications; Delivered weekly reports;",
      REQUIRED: true,
      INSTRUCTION:
        "give me explanations for a project related to a work, each one separated by semicolon (;) , e.g: project name: Data Analysis Project, explanation: Managed client communications; Delivered weekly reports;, but not this ones, it doesn't need to be about technology. Don't give the name, just the explanations",
    },
    FROM: {
      KEY: "projectFrom" as const,
      LABEL: "Start Date",
      PLACEHOLDER: "June 2021",
      REQUIRED: false,
      TYPE: "date",
      INSTRUCTION: "give me a date with this format: yyyy-MM-dd",
    },
    TO: {
      KEY: "projectTo" as const,
      LABEL: "End Date",
      PLACEHOLDER: "August 2021",
      REQUIRED: false,
      TYPE: "date",
      INSTRUCTION: "give me a date with this format: yyyy-MM-dd",
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
        "give me a list of skills, comma separated, e.g: Project Management, English, Microsoft Excel, Traveling, but not this ones, it doesn't need to be about technology. Always give at least 3",
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
    "give me a list of skills, comma separated, e.g: Project Management, Data Analysis, Software Development, Problem Solving, but not this ones, it doesn't need to be about technology. Always give at least 3",
  language:
    "give me a list of languages, comma separated, e.g: Italian, German, but not these ones. Include both common and uncommon languages. Always give at least 3",
  tool: "give me a list of tools or software, comma separated, e.g: Microsoft Excel, Photoshop, Salesforce, Google Analytics, but not these ones. Include both popular and specialized tools. Always give at least 3",
  interests:
    "give me a list of interests or hobbies, comma separated, e.g: Traveling, Photography, Reading, Sports, but not these ones. Include both common and unique interests. Always give at least 3",
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
    SPLIT_TASKS: 'Tasks must be separated using semicolon ";"',
    FROM_NOT_IN_FUTURE: "Start date cannot be in the future",
  },
  PROJECT: {
    TITLE_REQUIRED: "Title is required.",
    EXPLANATION_SEPARATOR_REQUIRED:
      'Explanation must include at least one semicolon ";" to separate items.',
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
export const ADVICE = "Upgrade to Pro to get AI generated responses"

export const NAV_BUTTONS = {
  BACK: "Back",
  NEXT: "Next",
}
