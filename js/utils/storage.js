// LocalStorage utilities for leaderboard
const LEADERBOARD_KEY = 'flappyBirdLeaderboard';
const MAX_LEADERBOARD_ENTRIES = 10;

export function saveScore(score) {
    const leaderboard = getLeaderboard();

    const newEntry = {
        score: score,
        date: new Date().toISOString(),
        timestamp: Date.now(),
    };

    leaderboard.push(newEntry);
    leaderboard.sort((a, b) => b.score - a.score);

    // Keep only top entries
    const topScores = leaderboard.slice(0, MAX_LEADERBOARD_ENTRIES);

    localStorage.setItem(LEADERBOARD_KEY, JSON.stringify(topScores));

    return topScores;
}

export function getLeaderboard() {
    const data = localStorage.getItem(LEADERBOARD_KEY);
    return data ? JSON.parse(data) : [];
}

export function clearLeaderboard() {
    localStorage.removeItem(LEADERBOARD_KEY);
}
