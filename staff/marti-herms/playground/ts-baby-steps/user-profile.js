//interface type
function getUserData(profile) {
    return "".concat(profile.name, " ").concat(profile.userProfile, " ").concat(profile.musicGenre, " ").concat(profile.location);
}
var band = {
    name: 'Barrenfields',
    userProfile: 'band',
    musicGenre: 'Punk-Rock',
    location: 'Madrid',
};
console.log(getUserData(band));
