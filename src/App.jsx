import './App.css'
import Links from './components/link'

function App() {
    return (
        <div className="min-h-screen bg-gradient-to-b from-pink-100 via-blue-100 to-pink-50 flex flex-col items-center p-8 font-sans">

            {/* 顶部导航链接 */}
            <Links />

            {/* 中心欢迎文字 */}
            <main className="flex-1 flex flex-col items-center justify-center text-center">
                <h1 className="text-4xl md:text-5xl font-bold text-pink-400 mb-6">
                    欢迎回来！
                </h1>
            </main>

        </div>
    )
}

export default App
