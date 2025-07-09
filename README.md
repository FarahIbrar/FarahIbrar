![Farah Ibrar's Github Banner](https://github.com/FarahIbrar/FarahIbrar/blob/main/Data%20Scientist%20-%20Farah%20Ibrar.png)

I'm Farah Ibrar from the United Kingdom, with a BSc in Biomedical Sciences (Hons) and an MSc in Biomedical Sciences (Immunology) from the University of Westminster, London. Transitioning into data analytics and data science, I combine analytical skills with a passion for data-driven problem-solving.

---

## 🤝🏻 Connect with Me: 
<p align="left">
    <a href="https://farahibrar.github.io/" target="_blank"><img src="https://go-skill-icons.vercel.app/api/icons?i=githubpages" align="centre" alt="githubpages" height="45" width="45" /></a>
  <a href="https://www.linkedin.com/in/farah-ibrar-a013b51a9/" target="_blank"><img align="centre" src="https://go-skill-icons.vercel.app/api/icons?i=linkedin" alt="LinkedIn" height="45" width="45" /></a>
  <a href="mailto:farah11ibrar@gmail.com" target="_blank"><img src="https://go-skill-icons.vercel.app/api/icons?i=gmail" align="centre" alt="Gmail" height="45" width="45" /></a>
  <a href="https://public.tableau.com/app/profile/farah.ibrar/vizzes" target="_blank"><img src="https://go-skill-icons.vercel.app/api/icons?i=tableau" align="centre" alt="Tableau" height="45" width="45" /></a>
  <a href="https://x.com/Farahibrar_" target="_blank"><img src="https://go-skill-icons.vercel.app/api/icons?i=x" align="centre" alt="x" height="45" width="45" />
  </a>
</p>

---

## <img src="https://github.com/FarahIbrar/FarahIbrar/blob/main/gifs/personal_interest.gif" alt="Interests" aria-hidden="true" width="40" height="40" /> Professional Interests
My academic journey sparked a strong interest in data analytics, visualization, and technology, particularly through Bioinformatics and R. During my Master's, my Data Science project on relational database storage for OMICS data solidified this passion. Since then, I have been actively expanding my expertise in data and technology, advancing my programming and data analysis skills through **self-learning** and **online courses**.

---
## <img src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Objects/Hammer%20and%20Wrench.png" alt="Hammer and Wrench" width="30" height="30" /> **Languages and Tools** 
<p align="left">
  <a href="https://go-skill-icons.vercel.app/">
    <img src="https://go-skill-icons.vercel.app/api/icons?i=python,seaborn,sklearn,tensorflow,pandas,numpy,matplotlib,docker,pytorch,scipy,pycharm,jupyter,mysql,postgresql,sqlite,r,tableau,vscode,anaconda,git,github,aws,azure,html,css,js,nodejs,bootstrap,figma,canva"/>
</p>

---

## <img src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Travel%20and%20places/Rocket.png" alt="Rocket" width="30" height="30" /> GitHub Stats

<p align="center">
<a href="https://git.io/streak-stats">
<img src="https://streak-stats.demolab.com?user=FarahIbrar&theme=modern-lilac2&hide_border=true&border_radius=&date_format=n%2Fj%5B%2FY%5D&card_width=1000&card_height=200" alt="GitHub Streak" />
</a>
</p>

---

<div style="display: flex;">
  <a href="https://github.com/FarahIbrar" style="flex: 1; margin-right: 10px;">
    <img height="190" src="https://github-readme-stats.vercel.app/api?username=FarahIbrar&card_width=200&bg_color=0D1117&text_color=ffffff&icon_color=a06cd5&title_color=9370db&show_icons=true&hide_border=true&hide_title=false" /></a>
  <a href="https://github.com/FarahIbrar" style="flex: 1;">
    <img height="190" src="https://github-readme-stats.vercel.app/api/top-langs/?username=FarahIbrar&layout=compact&card_width=200&langs_count=8&bg_color=0D1117&text_color=ffffff&title_color=9370db&hide_border=true" />
  </a>
</div>

---

<div style="width: 80%; margin-bottom: 40px;">
  <img src="https://github-readme-activity-graph.vercel.app/graph?username=FarahIbrar&radius=16&theme=tokyo-night&area=true&order=5&hide_title=true&bg_color=0D1117&color=9370db&line=8660d6&point=C3C3E5&area_color=D3BBDD&hide_border=true" style="width: 100%; height: auto;" alt="Contribution Graph" />
</div>

---

## <img src="https://github.com/FarahIbrar/FarahIbrar/blob/main/gifs/code.gif" alt="Code" width="30" height="30" /> **My Outlier Detection Script**
This [Python script](https://github.com/FarahIbrar/FarahIbrar/blob/main/Outlier%20Detection%20Script.md) automates outlier detection using the Interquartile Range (IQR) method, a robust statistical technique. By calculating the IQR and defining upper and lower bounds, it identifies significant anomalies in datasets. This streamlines data cleaning, ensuring more accurate and reliable analysis.

<details>
<summary> Click to view my Outlier Detection Code!</summary> 
    
  ```python
  import numpy as np

  def detect_outliers(data):
      q1, q3 = np.percentile(data, [25, 75])
      iqr = q3 - q1
      lower_bound = q1 - 1.5 * iqr
      upper_bound = q3 + 1.5 * iqr

      outliers = [x for x in data if x < lower_bound or x > upper_bound]

      return outliers

  if __name__ == "__main__":
      # Example usage:
      data = [12, 18, 25, 7, 10, 15, 8, 19, 3, 100, 16]  # Example dataset with an outlier (100)
      print("Detecting Outliers...")
      outliers = detect_outliers(data)
      if outliers:
          print("Outliers detected:", outliers)
      else:
          print("No outliers detected.")
```

</details>


<img src="https://raw.githubusercontent.com/FarahIbrar/FarahIbrar/output/snake.svg" alt="Snake animation" />
