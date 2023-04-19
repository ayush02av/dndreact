import ReactECharts from 'echarts-for-react'

export default function Bar({ option }) {
    if (option == null) return null
    return <ReactECharts option={option} />
}