/* eslint-disable*/
export default function getListStudentIds(arg) {
    if (Array.isArray(arg) === true) {
        const returnedArray = [];
        const individualsMap = new Map(
            arg.map((object) => [object.firstName, object.id]),
        );
        for (const id of individualsMap.values()) {
            returnedArray.push(id);
        }
        return returnedArray;
    }
    return [];
}
