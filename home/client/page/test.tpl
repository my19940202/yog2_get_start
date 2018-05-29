{% extends 'home:page/layout.tpl' %}

{% block content %}
    <article>
        <h1>swig模板语法的熟悉</h1>
        <p>{{name}}</p>
        <p>愿望：{{hope}}</p>

        <h3>数组的遍历</h3>
        <ul>
            {% for key, val in nums %}
                <li>{{ key }} -- {{ val }}</li>
            {% endfor %}
        </ul>
        <p>能够传入func {{calcu(10)}} 恩可以的</p>

        {% for index, item in data %}
            <p>
            {% for key, val in item %}
                <span>{{key}}: {{val}}</span> <br>
            {% endfor %}
            </p>
            <hr>
        {% endfor %}
    </article>
{% endblock %}
