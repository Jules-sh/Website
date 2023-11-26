import projectsData from "./projects.json"

import Project from "../objects/project"
import Connection from "../objects/connection"
import ProjectType from "@/app/objects/project_type";


export default function getProjects() {
    let list = []
    let listOfTypes = []
    for (const projectsType in projectsData.projects.types) {
        listOfTypes.push(new ProjectType(projectsType, projectsData.projects.types[projectsType].name))
        for (const project in projectsData.projects.types[projectsType].content) {
            list.push(idToProject(project, projectsType))
        }
    }
    return [list, listOfTypes]
}

function idToProject(projectID, type) {
    const object = projectsData.projects.types[type].content[projectID]
    return new Project(
        type,
        projectID,
        object.typeImplemented,
        object.typeGoal,
        object.platformsReady,
        object.platformsGoal,
        object.language,
        object.framework,
        object.name,
        object.description,
        object.features,
        new Connection(
            object.connection.repo,
            object.connection.playstore,
            object.connection.appstore,
            object.connection.fdroid,
            object.connection.pubdev,
            object.connection.youtrack,
        ),
        object.firstVersionReleased,
        object.activeSupport,
    )
}