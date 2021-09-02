// Answer for part C2: Architecture Design Task

// Database Schema

const runnerSchema = new Schema({
    personalInfo: {
        nameTitle: String,
        firstName: {
            inThai: String,
            inEnglish: String
        },
        lastName: {
            inThai: String,
            inEnglish: String
        },
        birthDate: {
            day: Number,
            month: Number,
            year: Number
        },
        email: String,
        id: String,
        address: String,
        photo: {
            base64: String,
            width: Number,
            height: Number
        },
        bib: String,
    },
    runningInfo: {
        usedToRunInMarathon: Boolean,
        estimateTimeForThisRunning: {
            hr: Number,
            min: Number
        },
    },
    emergencyContact: {
        firstPerson: {
            fullName: String,
            relationship: String,
            mobileNumber: String
        },
        secondPerson: {
            fullName: String,
            relationship: String,
            mobileNumber: String
        },
    },
    medicalInfo: {
        bloodType: String,
        medicalAllergy: {
            isAllergy: Boolean,
            detail: String
        },
        chronicHealth: {
            isChronic: Boolean,
            detail: String
        },
        surgeryBefore: {
            hadSurgery: Boolean,
            detail: String
        },
        planForHavingBabyOrPregnantBeforeThisEvent: {
            havePlan: Boolean,
            detail: String
        },
        personalMedicine: {
            haveToTake: Boolean,
            detail: String
        },
        injuredFromEvent: {
            haveInjured: Boolean,
            detail: String
        },
        exercise: {
            doOften: Boolean
        },
        easilyTired: {
            haveEasilyTired: Boolean,
            detail: String
        }
    },
    souvenir: {
        tShirt: {
            size: String
        }
    }
});

// Use Password-based Authentication

/* REST API Endpoint & Method

GET /               Get all runners.

GET /:id            Get runner by id.

PUT /form           Validate form and save draft.
    Body 
    {
    personalInfo: {
        nameTitle: String,
        firstName: {
            inThai: String,
            inEnglish: String
        },
        lastName: {
            inThai: String,
            inEnglish: String
        },
        .
        .
        .
    }

POST /form          Check form and submit form for adding new runner.
                    (Should validate entire form. Form must not be empty, not contain with special character, and be careful for types of variables, such as String, Number, etc.)
    Body
    {
    personalInfo: {
        nameTitle: String,
        firstName: {
            inThai: String,
            inEnglish: String
        },
        lastName: {
            inThai: String,
            inEnglish: String
        },
        .
        .
        .
    }

DELETE /:id         Delete runner. (In case you want to cancel the application)
    
*/