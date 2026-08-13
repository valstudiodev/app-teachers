// export const API_URL = 'https://valstudiodev.github.io/teachers-api'

export const API_BASE_URL = import.meta.env.VITE_API_URL

export const API_ROUTES = {
  teachers: `${API_BASE_URL}/teachers`,

  teacherById: (id: string | number) => `${API_BASE_URL}/teachers/${id}`,
} as const