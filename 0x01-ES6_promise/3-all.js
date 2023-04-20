/* eslint-disable*/
import { createUser, uploadPhoto } from "./utils";

export default function handleProfileSignup() {
    const photoPromise = uploadPhoto();
    return photoPromise.then((result) => {
        const photoBody = result.body;
        return photoBody;
    }).then((photoBody) => {
        const userPromise = createUser();
        userPromise.then((userResult) => {
            const { firstName } = userResult;
            const { lastName } = userResult;
            console.log(`${photoBody} ${firstName} ${lastName}`);
        });
    }).catch(() => {
        console.log("Signup system offline");
    });
}
