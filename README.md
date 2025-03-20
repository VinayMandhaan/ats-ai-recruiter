## AI Based ATS Recruitement

### Deployment URL
### https://ats-ai-recruiter.vercel.app/

### Documentation for Prompt Engineering
[Prompt Engineering for ATS.pdf](https://github.com/user-attachments/files/19373227/Prompt.Engineering.for.ATS.pdf)


### Setup Instructions

* Clone the repo and run yarn
* To run this project, run yarn dev

### Testing Instructions

* Run yarn test to run testing

### File Structure

#### The APIs are in the api folder. 
* /upload-cv - This API is used to parse the PDF,Docs and TextFile
* /job-titles - This API takes CV and generates Job Titles related to that CV.
* /job-descriptions - This API takes CV and selected Job title to generate Job Descriptions
* /generate-questions - This API takes CV, Job Title and Job Descriptions to generate interview questions related to skills, experience and job title. The questions are categorized into technical, situational and behavioral
* /interview - This API takes previous messages transcript, current question, timings, cvText and questionsCount to keep track of the interview and ask follow up questions for clarification.
* /interview-result - This API takes messages transcript, jobDescription, cvText and generate interview result based on the answers and response time.

#### There are 2 Routes.
* /recruitement - Using Components UploadFile, JobTitle, JobExperience and JobDescription
* /interview - Using Component Interview Result


### Preview


https://github.com/user-attachments/assets/edcd7dae-8fa6-4935-afe2-61a2fca9ff63

