import { useEffect, useState } from "react"
import { getMovies } from "../api"
import type { Movie } from "../types"

const useFetchMovies = () => {
  const [movies, setMovies] = useState<Movie[]>([])
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [error, setError] = useState<string | null>(null)

  const fetchMovies = async () => {
    setIsLoading(true)
    setError(null)
    try {
      const movies = await getMovies()
      setMovies(movies)
    } catch (e) {
      setError("Erro ao buscar filmes, tente novamente")
      console.error(e)
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    fetchMovies()
  }, [])

  return { movies, isLoading, error }
}

export default useFetchMovies
