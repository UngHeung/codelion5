# focus

focus, focus-visible
focus는 항상, focus-visible은 탭 이동시에만
즉 focus-visible은 키보드 입력으로 인한 접근일 경우만 반응

> 포커싱 이벤트가 일어나면 무조건 작동하는 :focus 와는 다르게 키보드 입력이 일어났을 경우만 가상클래스를 적용하게 합니다.

> 특히 접근성을 위해 사용하는 경우 마우스 이벤트로도 작동하는 focus는 시각적인 불편함과 체크를 해제했음에도 포커스되어 있다는 이유로 작동하는 혼란을 줄 수 있기 때문에 focus-visible 이 더 효과적이라고 볼 수 있습니다.

# IR

## IR(Image Replacement)

💡이미지 내 의미있는 텍스트의 대체 텍스트를 제공(지금은 거의 사용X)

### PC용

```
.ir_pm {
    display: block;
    overflow: hidden;
    font-size: 0;
    line-height: 0;
    text-indent: -9999px;
}
```

### Mobile용

```
.ir_pm {
    display: block;
    overflow: hidden;
    font-size: 1px;
    line-height: 0;
    color: transparent;
}
```

> transparent는 IE9부터 사용 가능하기 때문에 PC에선 사용하지 않음

### 마크업 구조상 필요

```
.screen_out {
    overflow: hidden;
    position: absolute;
    width: 0;
    height: 0;
    line-height: 0;
    text-indent: -9999px;
}
```

> section, article 등의 구역을 설명하는 제목 등에 사용

### 요즘 카카오에서 가장 많이 사용

```
.ir_wa {
    display: block;
    overflow: hidden;
    position: relative;
    z-index: -1;
    width: 100%;
    height: 100%;
}
```

### naver

```
.blind {
    position: absolute;
    clip: rect(0, 0, 0, 0)
    width: 1px;
    height: 1px;
    margin: -1px;
    overflow: hidden;
}
```

> IE 구버전에서 인식이 안되는 경우가 있기 때문에 margin을 사용
> clip을 통해 요소를 잘라낼 수도 있으며, 여기서는 요소를 화면에서 완전히 숨기기 위해 사용
> clip-path로 대체됨 (naver는 IE 구버전 지원을 위해 사용)

### 쿠팡

```
.product-search a.search {
    overflow: hidden;
    position: absloute;
    right: 50px;
    height: 39px
    background-position: -112px -71px;
    text-indent: -9em;
}
```

# font, image

### 메뉴에 폰트 적용 대신 이미지를 사용하는 이유

> 폰트가 기본적으로 이미지이며, 많은 양의 문자들을 처리하다 보면 사이즈가 커지며 용량을 많이 가져가기 때문에 딱 필요한 만큼만 사용하기 위해서 메뉴를 폰트 대신 이미지로 사용한다.

# 접근성

## [AOA11Y](https://www.youtube.com/@AOA11Y)

## [merder21c](https://mulder21c.github.io/)
