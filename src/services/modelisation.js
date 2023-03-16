/**
 * Format the main data of a user to readable data for the components
 * @param {Object} userData 
 * @returns {Object}
 */
export const parseUserData = (userData) => {
    return ({
        firstname: userData.userInfos.firstName,
        score: userData.todayScore * 100,
        keyData: userData.keyData
    })
}

/**
 * Format the activity data of a user to readable data for the components
 * @param {Object} userData 
 * @returns {Object}
 */
export const parseUserActivity = (userActivity) => {
    const parsedData = userActivity.sessions.map((data)=>{
        let day = new Date(data.day)
        return {
            day : `${day.getDate()}`,
            kilogram : data.kilogram,
            calories : data.calories
        }
    })
    return parsedData
}

/**
 * Format the average sessions data of a user to readable data for the components
 * @param {Object} userData 
 * @returns {Object}
 */
export const parseUserAverageSessions = (userSessions) => {
    const days = {
        1: 'L',
        2: 'M',
        3: 'M',
        4: 'J',
        5: 'V',
        6: 'S',
        7: 'D',
    };

    const parsedData = userSessions.sessions.map((data) => {
        return ({
            day: days[data.day],
            sessionLength: data.sessionLength,
        })
    });

    return parsedData;
}

/**
 * Format the performance data of a user to readable data for the components
 * @param {Object} userData 
 * @returns {Object}
 */
export const parseUserPerformance = (userPerformance) => {

    const kinds = {
        1: 'Cardio',
        2: 'Energy',
        3: 'Endurance',
        4: 'Force',
        5: 'Vitesse',
        6: 'Intensité',
    };

    const parsedData = userPerformance.data.map((data) => {
        return ({
            kind: kinds[data.kind],
            value: data.value,
        })
    });

    return parsedData;
}