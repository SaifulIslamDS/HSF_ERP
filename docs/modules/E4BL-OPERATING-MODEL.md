# E4BL Operating and Reporting Model

## Project context

Education for Better Life (E4BL) is HSF's education-continuity programme. The current formal operating model includes the Hazaribagh and Uttara education centres. Teachers, Head Teachers and authorized project users are assigned to the E4BL project and relevant centre.

Current enrolment, staffing, attendance, Grade V completion, graduate transition and other changing figures must come from the approved E4BL operational dataset/ERP reporting period. Historical discovery figures must not be hard-coded as current programme truth.

## User responsibilities

### Teacher

Recommended inputs:

- Staff attendance
- Class conducted
- Subject and lesson covered
- Student attendance and absence
- Homework or assessment
- Learning difficulty
- At-risk student
- Home visit
- Parent meeting
- Material distribution
- Classroom activity
- Event participation
- Training participation
- Special achievement
- Challenge and support needed

### Head Teacher

Responsibilities:

- Review Teacher submissions
- Verify centre attendance
- Review student-risk follow-up
- Consolidate centre achievement
- Review material and operational needs
- Submit the next month's centre requisition

### Project Coordinator

Responsibilities:

- Review centre submissions
- Review and consolidate field requisitions
- Prepare the E4BL MFR
- Verify project-level monthly reporting
- Monitor target, achievement, evidence, and variance

## Reporting flow

```text
Teacher Daily Entry
    ↓
Teacher Monthly Achievement Draft
    ↓
Teacher Submission
    ↓
Head Teacher Review
    ↓
Centre-level Consolidation
    ↓
Project Coordinator Review
    ↓
Verified Monthly E4BL Project Report
```

## Core E4BL entities

Future design may include:

- Education Centre
- Academic Year
- Class
- Subject
- Student Master
- Annual Enrollment
- Guardian
- Teacher Assignment
- Student Attendance
- Staff Attendance
- Lesson or Class Activity
- Assessment
- Exam and Result
- Promotion
- Dropout or Inactive Status
- Home Visit
- Parent Meeting
- Material Distribution
- Fee and Waiver
- Teacher Achievement Report
- Centre Requisition
- HSF Graduate
- High-school Support
- Child Sponsorship

Student Master and annual Enrollment must remain separate.

## Centre-specific policy

- Historical programme documentation describes different fee/support practices between Hazaribagh and Uttara.
- Exact current fee, waiver, material-support and approval rules require approved requirements before production configuration.
- The ERP should make these rules configurable rather than inferring policy from historical narrative.

## Data-quality expectations

- Prevent duplicate active enrollment.
- Preserve attendance correction history.
- Require reason codes for dropout or status changes.
- Track long absence and student-risk follow-up.
- Separate counts, percentages, currency, and material quantities.
