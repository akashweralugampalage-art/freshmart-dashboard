function createLineChart(ctx, labels, data, label, color) {
  return new Chart(ctx, {
    type: 'line',
    data: {
      labels: labels,
      datasets: [{
        label: label,
        data: data,
        borderColor: color,
        fill: false,
        tension: 0.3
      }]
    }
  });
}

function createBarChart(ctx, labels, data, label, color) {
  return new Chart(ctx, {
    type: 'bar',
    data: {
      labels: labels,
      datasets: [{
        label: label,
        data: data,
        backgroundColor: color
      }]
    }
  });
}

function createPieChart(ctx, labels, data, colors) {
  return new Chart(ctx, {
    type: 'pie',
    data: {
      labels: labels,
      datasets: [{
        data: data,
        backgroundColor: colors
      }]
    }
  });
}
