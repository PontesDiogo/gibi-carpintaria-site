import { useEffect } from 'react'
import { supabase } from '../services/supabaseClient'
function App() {
  useEffect(() => {
    async function loadProjects() {
      const { data, error } = await supabase
        .from('projects')
        .select('*')
        .eq('publicado', true)

      console.log('Projetos:', data)
      console.log('Erro:', error)
    }

    loadProjects()
  }, [])

  return <h1>Gibi Carpintaria</h1>
}

export default App