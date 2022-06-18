interface Property {
  justify?: string;
  align?: string;
}

export function row(justify?: string, align?: string): string {
  return `display: flex; 
    flex-direction: row; 
    justify-content:${justify};
    align-items: ${align};`;
}
export function column(justify?: string, align?: string): string {
  return `display: flex; 
    flex-direction: column; 
    justify-content:${justify};
    align-items: ${align};`;
}
export function rowReverse(justify?: string, align?: string): string {
  return `display: flex; 
    flex-direction: row-reverse; 
    justify-content:${justify || "center"};
    align-items: ${align || "center"};`;
}
export function columnReverse(justify?: string, align?: string): string {
  return `display: flex; 
    flex-direction: column-reverse; 
    justify-content:${justify || "center"};
    align-items: ${align || "center"};`;
}
export const breakpoint = {
  sm: "576px",
  md: "768px",
  xmd: "840px",
  l: "993px",
  xl: "1200px",
  xxl: "1400px",
};
