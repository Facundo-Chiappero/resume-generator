export const HEAD_DATA_FORM = {
  INPUTS: {
    FULL_NAME: {
      KEY: "fullName" as const,
      LABEL: "Full Name",
      PLACEHOLDER: "John Doe",
      AUTOCOMPLETE: "name",
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
    },
    EMAIL: {
      KEY: "email" as const,
      LABEL: "Email",
      PLACEHOLDER: "john.doe@example.com",
      REQUIRED: true,
      AUTOCOMPLETE: "email",
    },
    ADDRESS: {
      KEY: "address" as const,
      LABEL: "Address",
      PLACEHOLDER: "1234 Elm Street, Apartment 56",
      REQUIRED: false,
      AUTOCOMPLETE: "street-address",
    },
    PHONE: {
      KEY: "phone" as const,
      LABEL: "Phone",
      PLACEHOLDER: "+1 800 555 1212, +54 9 1123456789",
      REQUIRED: false,
      AUTOCOMPLETE: "tel",
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
    },
    LOCATION: {
      KEY: "educationLocation" as const,
      LABEL: "Location",
      PLACEHOLDER: "Cambridge, MA, USA",
      REQUIRED: true,
      AUTOCOMPLETE: "address-level2",
    },
    YEAR: {
      KEY: "year" as const,
      LABEL: "Year",
      PLACEHOLDER: "2022",
      REQUIRED: true,
      AUTOCOMPLETE: "bday-year",
    },
    GPA: {
      KEY: "gpa" as const,
      LABEL: "GPA",
      PLACEHOLDER: "3.9/4.0",
      REQUIRED: false,
    },
    THESIS: {
      KEY: "thesis" as const,
      LABEL: "Highlighted Project/Thesis",
      PLACEHOLDER: "AI for Social Good: Predictive Modeling in Public Health",
      REQUIRED: false,
    },
    RELATED_SUBJECTS: {
      KEY: "relatedSubjects" as const,
      LABEL: "Related Subjects",
      PLACEHOLDER: "Machine Learning, Ethics in AI, Data Science",
      REQUIRED: false,
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
    },
    ROLE: {
      KEY: "role" as const,
      LABEL: "Position or Role",
      PLACEHOLDER: "Software Engineering Intern",
      REQUIRED: true,
      AUTOCOMPLETE: "organization-title",
    },
    EXPERIENCE_LOCATION: {
      KEY: "experienceLocation" as const,
      LABEL: "Location",
      PLACEHOLDER: "Mountain View, CA, USA",
      REQUIRED: true,
      AUTOCOMPLETE: "address-level2",
    },
    FROM: {
      KEY: "from" as const,
      LABEL: "Start Date",
      PLACEHOLDER: "June 2021",
      REQUIRED: true,
      TYPE: "date",
    },
    TO: {
      KEY: "to" as const,
      LABEL: "End Date",
      PLACEHOLDER: "August 2021",
      REQUIRED: true,
      TYPE: "date",
    },
    TASKS: {
      KEY: "tasks" as const,
      LABEL: "Key Responsibilities or Achievements",
      PLACEHOLDER: "Improved project tracking system; Created clear workflows",
      REQUIRED: true,
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
    },
    EXPLANATION: {
      KEY: "explanation" as const,
      LABEL: "Explanation",
      PLACEHOLDER: "Managed client communications; Delivered weekly reports;",
      REQUIRED: true,
    },
    FROM: {
      KEY: "projectFrom" as const,
      LABEL: "Start Date",
      PLACEHOLDER: "June 2021",
      REQUIRED: false,
      TYPE: "date",
    },
    TO: {
      KEY: "projectTo" as const,
      LABEL: "End Date",
      PLACEHOLDER: "August 2021",
      REQUIRED: false,
      TYPE: "date",
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

// Error Messages
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

// Form Constants
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

export const TITLE = "Generate Your Resume"

export const NAV_BUTTONS = {
  BACK: "Back",
  NEXT: "Next",
}

export const BASIC_INPUT_STYLE = {
  fullWidth: true,
  variant: "filled" as const,
  color: "primary" as const,
  sx: {
    input: { color: "white" },
    label: { color: "white" },
    ".MuiFilledInput-root": {
      backgroundColor: "#444",
      "&:hover": {
        backgroundColor: "#555", // más claro que el base
      },
      "&.Mui-focused": {
        backgroundColor: "#333", // más oscuro al enfocar si querés
      },
    },
  },
}
