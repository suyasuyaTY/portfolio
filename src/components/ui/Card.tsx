import Image from 'next/image';
import React from 'react';

type CardProps = {
  children: React.ReactNode;
  className?: string;
};

const Card = ({ children, className }: CardProps) => {
  return <div className={className}>{children}</div>;
};

type CardMediaProps = {
  className?: string;
  width: number;
  height: number;
  image: string;
  title: string;
};

const CardMedia = ({ className, width, height, image, title }: CardMediaProps) => {
  return <Image src={image} alt={title} width={width} height={height} className={className} />;
};

type CardContentProps = {
  children: React.ReactNode;
  className?: string;
};

const CardContent = ({ children, className }: CardContentProps) => {
  return <div className={className}>{children}</div>;
};

export { Card, CardMedia, CardContent };
