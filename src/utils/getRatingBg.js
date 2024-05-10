export const getRatingBG = (rating) => {
  return {
      bg: `linear-gradient(90deg, var(--color-starBackground) calc(${rating} / 10 * 100%), var(--color-ratingBg) calc(${rating} / 10 * 100%))`
  }
}
