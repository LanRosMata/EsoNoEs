'use client'

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { useRouter } from 'next/navigation'

interface LadaCardProps {
  id: string
  title: string
  description: string
}

export default function LadaCard({ id, title, description }: LadaCardProps = {
  id: '1',
  title: 'Lada 2101',
  description: 'El clásico sedán soviético'
}) {
  const router = useRouter()

  const handleClick = () => {
    router.push(`/lada/${id}`)
  }

  return (
    <Card className="w-[300px] cursor-pointer hover:shadow-lg transition-shadow duration-200" onClick={handleClick}>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p>{description}</p>
        <Button className="mt-4" onClick={handleClick}>Ver detalles</Button>
      </CardContent>
    </Card>
  )
}