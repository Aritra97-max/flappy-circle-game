// Collision detection utilities
export function checkCircleRectCollision(circleX, circleY, radius, rectX, rectY, rectWidth, rectHeight) {
    // Find the closest point on the rectangle to the circle
    const closestX = Math.max(rectX, Math.min(circleX, rectX + rectWidth));
    const closestY = Math.max(rectY, Math.min(circleY, rectY + rectHeight));

    // Calculate distance between circle center and closest point
    const distanceX = circleX - closestX;
    const distanceY = circleY - closestY;
    const distanceSquared = distanceX * distanceX + distanceY * distanceY;

    return distanceSquared < radius * radius;
}

export function checkBoundaryCollision(y, radius, canvasHeight) {
    return y - radius <= 0 || y + radius >= canvasHeight;
}
